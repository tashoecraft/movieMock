import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { GetAllMovies } from '../../store/actions';
import {selectMovieDetailsByimdbID, selectMovieList} from '../../store/reducer';
import {map, tap} from 'rxjs/operators';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {MovieLite} from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movieDetailsHash = {};
  public currentSelectedDecade = 2010;
  public updateDecade$: BehaviorSubject<number> = new BehaviorSubject(this.currentSelectedDecade);

  private movieList$: Observable<MovieLite[]> = this.store.select(selectMovieList).pipe(
    tap((movies) => {
      this.movieDetailsHash = movies.reduce((accum, movie) => {
        accum[movie.imdbID] = this.store.select(selectMovieDetailsByimdbID(movie.imdbID));
        return accum;
      }, {});
    })
  );

  public movieListFilteredByYear$ = combineLatest([
    this.updateDecade$,
    this.movieList$
  ]).pipe(
    tap(([year]) => this.currentSelectedDecade = year),
    map(([year, movies]) => {
      return movies.filter((movie) => {
        const yearAsNumber = Number(movie.Year);
        // By subtracting the year by the module 10 value of it, we will clear what is in the 10's column,
        // reducing a year to it's decade
        return year === (yearAsNumber - yearAsNumber % 10);
      });
    })
  );

  public decades = [2020, 2010, 2000, 1990, 1980, 1970, 1960, 1950, 1940];

  constructor(private store: Store) {
    this.store.dispatch(GetAllMovies({searchTerm: 'Batman'}));
  }

  ngOnInit(): void {
  }

}
