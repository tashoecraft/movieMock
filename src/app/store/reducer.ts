import {createReducer, createSelector, on} from '@ngrx/store';
import { MovieLite, MovieFull } from '../models';
import * as MovieActions from './actions';


export interface State {
  movieName: string;
  results: MovieLite[];
  movies: {
    [key: string]: MovieFull
  };
}

export const initialState = {
  movieName: undefined,
  results: [],
  movies: {}
};

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.GetAllMoviesSuccess, (state: State, {results}: {results: MovieLite[]}) => {
    return {...state, results};
  }),
  on(MovieActions.GetMovieSuccess, (state, {result}: {result: MovieFull}) => {
    return {...state, movies: {...state.movies, [result.imdbID]: result}};
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


