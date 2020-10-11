import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { GetAllMovies } from '../../store/actions';
import {selectMovieList} from '../../store/reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public movieList$ = this.store.select(selectMovieList);

  constructor(private store: Store) {
    this.store.dispatch(GetAllMovies({searchTerm: 'Batman'}));
  }

  ngOnInit(): void {
  }

}
