import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { RegisterRequest } from '../models/register-request';
import { User } from '../models/user';
import { UserUpdate } from '../models/user-update';
import { ApiService } from './api.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL_PREFIX = 'auth';
  
  LOGIN_PATH = '/login'
  REGISTER_PATH = '/register'
  LOGOUT_PATH = '/logout'

  USER_LIST_PATH = '/users'
  USER_DETAIL_UPDATE_DELETE_PATH = '/users/userId'

  constructor(
    private api: ApiService,
    private tokenService: TokenService,
  ) { }

  login(data: LoginRequest): void {
    this.api.post<LoginResponse>(
      `${this.URL_PREFIX}${this.LOGIN_PATH}`,
      data,
    ).subscribe((response) => {
      const token = response.token;
      this.tokenService.setToken(token);
    })
  }

  logout(): Observable<void> {
    return this.api.get<void>(this.LOGOUT_PATH)
      .pipe(
        tap(() => this.tokenService.destroyToken()),
      );
  }

  register(data: RegisterRequest): void {
    this.api.post<LoginResponse>(
      `${this.URL_PREFIX}${this.REGISTER_PATH}`,
      data,
    ).subscribe((response) => {
      const token = response.token;
      this.tokenService.setToken(token);
    })
  }

  getUsers(): Observable<User[]> {
    return this.api.get<User[]>(this.USER_LIST_PATH);
  }

  updateUser(userId: number, data: UserUpdate): Observable<User> {
    const path = this.api.replaceParams(
      `${this.URL_PREFIX}${this.USER_DETAIL_UPDATE_DELETE_PATH}`,
      { userId },
    )

    return this.api.put<User>(path, data);
  }

  deleteUser(userId: number): Observable<void> {
    const path = this.api.replaceParams(
      `${this.URL_PREFIX}${this.USER_DETAIL_UPDATE_DELETE_PATH}`,
      { userId }
    );

    return this.api.delete(path);
  }
}
function tap(arg0: () => any): import("rxjs").OperatorFunction<void, void> {
  throw new Error('Function not implemented.');
}

