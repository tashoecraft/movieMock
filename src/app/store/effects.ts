import {Injectable} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as MovieActions from './actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {MovieLite} from '../models';
import {of} from 'rxjs';


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



  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}
}
