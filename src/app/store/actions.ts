import {createAction, props} from '@ngrx/store';
import {MovieFull, MovieLite} from '../models';

export enum MovieActionTypes {
  GET_ALL_MOVIES = '[MOVIES API] GET ALL MOVIES',
  GET_ALL_MOVIES_SUCCESS = '[MOVIES API] GET ALL MOVIES SUCCESS',
  GET_ALL_MOVIES_FAIL = '[MOVIES_API] GET ALL MOVIES FAIL',
  GET_MOVIE = '[MOVIES API] GET MOVIE',
  GET_MOVIE_SUCCESS = '[MOVIES API] GET MOVIE SUCCESS',
  GET_MOVIE_FAIL = '[MOVIES_API] GET MOVIE FAIL',
  CLEAR_ERROR_MESSAGE = '[MOVIES ERROR] CLEAR ERROR MESSAGE'
}

export const GetAllMovies = createAction(
  MovieActionTypes.GET_ALL_MOVIES,
  props<{searchTerm: string, page?: number}>()
);

export const GetAllMoviesSuccess = createAction(
  MovieActionTypes.GET_ALL_MOVIES_SUCCESS,
  props<{results: MovieLite[], page?: number}>()
);

export const GetAllMoviesFail = createAction(
  MovieActionTypes.GET_ALL_MOVIES_FAIL,
  props<{error: string}>()
);


export const GetMovie = createAction(
  MovieActionTypes.GET_MOVIE,
  props<{imdbID: string}>()
);

export const GetMovieSuccess = createAction(
  MovieActionTypes.GET_MOVIE_SUCCESS,
  props<{result: MovieFull}>()
);

export const GetMovieFail = createAction(
  MovieActionTypes.GET_MOVIE_FAIL,
  props<{error: string}>()
);

export const ClearErrorMessage = createAction(
  MovieActionTypes.CLEAR_ERROR_MESSAGE
);
