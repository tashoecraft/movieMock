import {ChangeDetectionStrategy, Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorHandlerComponent {

  constructor() { }

  // tslint:disable-next-line:variable-name
  private _errorMessage = '';
  @Input('errorMessage')
  set errorMessage(message: string) {
    this._errorMessage = message;
  }
  get errorMessage(): string {
    return this._errorMessage;
  }

  @Output() clearErrorMessageEvent: EventEmitter<boolean> = new EventEmitter();
  clearMessage(): void {
    this.errorMessage = '';
    this.clearErrorMessageEvent.emit(true);
  }
}
