import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private readonly USER_ID_STORAGE_KEY = 'authUserId';

  getAuthUserId(): number {
    const id = window.localStorage[this.USER_ID_STORAGE_KEY];
    return parseInt(id, 10) || null;
  }

  saveAuthUserId(userId: number): void {
    window.localStorage[this.USER_ID_STORAGE_KEY] = userId;
  }

  destroyAuthUserId(): void {
    window.localStorage.removeItem(this.USER_ID_STORAGE_KEY);
  }
}
