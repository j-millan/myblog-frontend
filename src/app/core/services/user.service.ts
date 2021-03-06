import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { RegisterRequest } from '../models/register-request';
import { User } from '../models/user';
import { UserUpdate } from '../models/user-update';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly URL_PREFIX = 'auth/';

  private readonly LOGIN_PATH = 'login';
  private readonly REGISTER_PATH = 'register';
  private readonly LOGOUT_PATH = 'logout';

  private readonly USER_LIST_PATH = 'users';
  private readonly USER_DETAIL_UPDATE_DELETE_PATH = 'users/userId';

  authenticatedUserSubject: BehaviorSubject<User> =
    new BehaviorSubject<User>({} as User);
  authenticatedUser$: Observable<User> =
    this.authenticatedUserSubject
    .asObservable()
    .pipe(
      map((user) => user.id ? user : null),
    );

  constructor(
    private api: ApiService,
    private tokenService: TokenService,
    private authService: AuthService,
  ) {
    const userId = this.authService.getAuthUserId();
    if (userId) {
      this.getUser(userId).subscribe((user) => {
        this.authenticatedUserSubject.next(user);
      });
    }
  }

  login(data: LoginRequest): Observable<User> {
    return this.api.post<LoginResponse>(
      `${this.URL_PREFIX}${this.LOGIN_PATH}`,
      data,
    ).pipe(
      tap((response) => {
        const token = response.token;
        this.tokenService.setToken(token);
      }),
      switchMap((response) =>
        this.getUser(response.user.id),
      ),
      tap((user) => {
        this.authService.saveAuthUserId(user.id);
        this.authenticatedUserSubject.next(user);
      })
    );
  }

  logout(): Observable<void> {
    return this.api.get<void>(
      `${this.URL_PREFIX}${this.LOGOUT_PATH}`
    ).pipe(
      tap(() => {
        this.tokenService.destroyToken();
        this.authService.destroyAuthUserId();
        this.authenticatedUserSubject.next({} as User);
      }),
    );
  }

  register(data: RegisterRequest): Observable<User> {
    return this.api.post<User>(
      `${this.URL_PREFIX}${this.REGISTER_PATH}`,
      data,
    );
  }

  getUsers(): Observable<User[]> {
    return this.api.get<User[]>(this.USER_LIST_PATH);
  }

  getUser(userId: number): Observable<User> {
    const path = this.api.replaceParams(
      `${this.URL_PREFIX}${this.USER_DETAIL_UPDATE_DELETE_PATH}`,
      { userId }
    );

    return this.api.get<User>(path);
  }

  updateUser(userId: number, data: UserUpdate): Observable<User> {
    const path = this.api.replaceParams(
      `${this.URL_PREFIX}${this.USER_DETAIL_UPDATE_DELETE_PATH}`,
      { userId },
    );

    return this.api.put<User>(path, data);
  }

  deleteUser(userId: number): Observable<void> {
    const path = this.api.replaceParams(
      `${this.URL_PREFIX}${this.USER_DETAIL_UPDATE_DELETE_PATH}`,
      { userId },
    );

    return this.api.delete(path);
  }
}
