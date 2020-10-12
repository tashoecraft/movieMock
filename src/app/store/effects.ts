import {Injectable} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as MovieActions from './actions';
import {catchError, filter, map, mergeMap} from 'rxjs/operators';
import {MovieFull, MovieLite} from '../models';
import {of, race} from 'rxjs';
import {selectMovieDetailsByimdbID} from './reducer';
import {Store} from '@ngrx/store';


@Injectable()
export class MovieEffects {

  getMovies$ = createEffect(() => this.actions$.pipe(
    ofType(MovieActions.GetAllMovies),
    mergeMap(({searchTerm}) => this.movieService.getMovies(searchTerm).pipe(
      map((results: MovieLite[]) => MovieActions.GetAllMoviesSuccess({results})),
      catchError(() => {
        return of(MovieActions.GetAllMoviesFail({error: `Failed to retrieve movies for search term: ${searchTerm}`}));
      })
    ))
  ));

  getMovieSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(MovieActions.GetAllMoviesSuccess),
    mergeMap(({results}) => {
      return results.map(({imdbID}) => {
        return MovieActions.GetMovie({imdbID});
      });
    })
  ));

  getMovieDetails$ = createEffect(() => this.actions$.pipe(
    ofType(MovieActions.GetMovie),
    mergeMap(({imdbID}) => {
      // The reason for the race operator is that the observable from the store *should* finish ahead of retrieving
      // from sessionStorage, and certainly faster than a network call.
      return race<any>([
        this.store.select(selectMovieDetailsByimdbID(imdbID)).pipe(
          filter((movieDetails) => !!movieDetails),
          map((movieDetails: MovieFull) => MovieActions.GetMovieSuccess({result: movieDetails})),
        ),
        this.movieService.getMovieById(imdbID).pipe(
          map((movieDetails: MovieFull) => MovieActions.GetMovieSuccess({result: movieDetails})),
          catchError(() => of(MovieActions.GetMovieFail({error: `Failed to retrieve data for movie with id: ${imdbID}`})))
        )
      ]);
    })
  ));


  constructor(
    private actions$: Actions,
    private movieService: MovieService,
    private store: Store
  ) {}
}
