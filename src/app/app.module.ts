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
import {ContentLoaderModule} from '@ngneat/content-loader';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import {MatIconModule} from '@angular/material/icon';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieCardComponent,
    ErrorHandlerComponent
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
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
    MatIconModule,
    ContentLoaderModule
  ],
  providers: [
    MovieService,
    SessionStorageService,
    // {
    //   provide: APP_BASE_HREF,
    //   useValue: window.location.pathname,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
