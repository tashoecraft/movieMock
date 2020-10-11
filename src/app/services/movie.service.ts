import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {MovieFull, MovieLite} from '../models';
import {Observable} from 'rxjs';

@Injectable()
export class MovieService {
  private API_KEY = environment.apiKey;

  constructor(private httpClient: HttpClient) {
  }

  getMovies(searchTerm: string, page: number = 1): Observable<MovieLite[]> {
    return this.httpClient.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${this.API_KEY}&type=movie&page=${page}`).pipe(
      map((results: {Search: MovieLite[]}) => results.Search )
    );
  }

  getMovieById(imdbID: string): Observable<MovieFull> {
    return this.httpClient.get<MovieFull>(`http://www.omdbapi.com/?i=${imdbID}&apikey=${this.API_KEY}`);
  }
}
