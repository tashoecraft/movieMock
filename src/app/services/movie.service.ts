import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map, tap} from 'rxjs/operators';
import {MovieFull, MovieLite} from '../models';
import {Observable, of} from 'rxjs';
import {SessionStorageService} from './session_storage.service';

@Injectable()
export class MovieService {
  private API_KEY = environment.apiKey;

  constructor(private httpClient: HttpClient,
              private sessionStorageService: SessionStorageService) {
  }

  getMovies(searchTerm: string, page: number = 1): Observable<MovieLite[]> {
    const sessionStorageValue = this.sessionStorageService.getFromSessionStorage(searchTerm);
    if (sessionStorageValue) {
      return of(sessionStorageValue);
    }
    return this.httpClient.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${this.API_KEY}&type=movie&page=${page}`).pipe(
      map((results: {Search: MovieLite[]}) => results.Search ),
      tap((results) => {
        this.sessionStorageService.addToSessionStorage(searchTerm, results);
      })
    );
  }

  getMovieById(imdbID: string): Observable<MovieFull> {
    const sessionStorageValue = this.sessionStorageService.getFromSessionStorage(imdbID);
    if (sessionStorageValue) {
      return of(sessionStorageValue);
    }
    return this.httpClient.get<MovieFull>(`http://www.omdbapi.com/?i=${imdbID}&apikey=${this.API_KEY}`).pipe(
      tap((results) => {
        this.sessionStorageService.addToSessionStorage(imdbID, results);
      })
    );
  }
}
