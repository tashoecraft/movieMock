import {Injectable} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as MovieActions from './actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {MovieLite} from '../models';
import {of} from 'rxjs';
import { SessionStorageService} from '../services/session_storage.service';


@Injectable()
export class MovieEffects {

  getMovies$ = createEffect(() => this.actions$.pipe(
    ofType(MovieActions.GetAllMovies),
    mergeMap(({searchTerm}) => this.movieService.getMovies(searchTerm).pipe(
      map((results: MovieLite[]) => {

        return MovieActions.GetAllMoviesSuccess({results});
      }),
      catchError(error => {
        return of(MovieActions.GetAllMoviesFail({error}));
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
      return this.movieService.getMovieById(imdbID).pipe(
        map((movieDetails) => MovieActions.GetMovieSuccess({result: movieDetails})),
        catchError(error => of(MovieActions.GetMovieFail({error, imdbID})))
      );
    })
  ));


  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}
}
