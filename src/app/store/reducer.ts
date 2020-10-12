import {createReducer, createSelector, on} from '@ngrx/store';
import { MovieLite, MovieFull } from '../models';
import * as MovieActions from './actions';


export interface State {
  movieName: string;
  results: MovieLite[];
  movies: {
    [key: string]: MovieFull
  };
  error: string;
}

export const initialState = {
  movieName: undefined,
  results: [],
  movies: {},
  error: null
};

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.GetAllMoviesSuccess, (state: State, {results}: {results: MovieLite[]}) => {
    return {...state, results: [...state.results, ...results]};
  }),
  on(MovieActions.GetMovieSuccess, (state, {result}: {result: MovieFull}) => {
    return {...state, movies: {...state.movies, [result.imdbID]: result}};
  }),
  on(MovieActions.ClearErrorMessage, (state) => ({...state, error: undefined})),
  on(MovieActions.GetMovieFail, MovieActions.GetAllMoviesFail, (state, {error}) => {
    return {...state, error};
  })
);

export const selectMovieState = (state: {movies: State}) => state.movies;

export const selectMovieList = createSelector(
  selectMovieState,
  (state: State) => state.results
);

export const selectMovieDetailsByimdbID = (imdbID: string) => {
  return createSelector(
    selectMovieState,
    (state: State) => state.movies[imdbID]
  );
};

export const selectErrorMessage = createSelector(
  selectMovieState,
  (state: State) => state.error
);

