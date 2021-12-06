import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  private readonly TOKEN_STORAGE_KEY = 'authToken';

  getToken(): string {
    return window.localStorage[this.TOKEN_STORAGE_KEY];
  }

  setToken(token: string): void {
    window.localStorage[this.TOKEN_STORAGE_KEY] = token;
  }

  destroyToken(): void {
    window.localStorage.removeItem(this.TOKEN_STORAGE_KEY);
  }
}
