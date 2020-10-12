import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MovieFull, MovieLite} from '../../models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {

  constructor() { }

  @Input() movie: MovieLite;

  @Input() movieDetails: MovieFull;

}
