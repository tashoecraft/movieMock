import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routes} from './routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {movieReducer} from './store/reducer';
import {MovieEffects} from './store/effects';
import {MovieService} from './services/movie.service';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {SessionStorageService} from './services/session_storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    StoreModule.forRoot({movies: movieReducer, router: routerReducer}),
    EffectsModule.forRoot([MovieEffects]),
    StoreRouterConnectingModule.forRoot(),
    RouterModule.forRoot(routes),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule
  ],
  providers: [MovieService, SessionStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
