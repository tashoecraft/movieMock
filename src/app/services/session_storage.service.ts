import {Injectable} from '@angular/core';

@Injectable()
export class SessionStorageService {

  constructor() {
  }

  checkSessionStorage(): boolean {
    if (window.sessionStorage) {
      const test = 'test';
      try {
        window.sessionStorage.setItem(test, test);
        window.sessionStorage.getItem('test');
        window.sessionStorage.removeItem('test');
        return true;
      } catch (e) {
        return false;
      }
    } else {
      return false;
    }
  }

  addToSessionStorage(key: string, item: any): boolean {
    try {
      if (this.checkSessionStorage()) {
        if (item) {

          window.sessionStorage.setItem(key, JSON.stringify(item));
          return true;
        } else {
          return false;
        }
      } else {
        console.error('SessionStorage is unavailable');
      }
    } catch (e) {
      console.error('Set Session storage error: ', e);
    }
  }

  getFromSessionStorage(key): any {
    try {
      if (this.checkSessionStorage()) {
        if (key) {
          return JSON.parse(window.sessionStorage.getItem(key));
        }
      }
      return false;
    } catch (e) {
      console.error('Get from Session storage error: ', e);
      return false;
    }
  }
}
