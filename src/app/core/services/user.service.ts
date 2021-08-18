import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { RegisterRequest } from '../models/register-request';
import { User } from '../models/user';
import { UserUpdate } from '../models/user-update';
import { ApiService } from './api.service';
import { TokenService } from './token.service';
import { switchMap, tap } from 'rxjs/operators';

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

  isAuthenticatedSubject: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
  
  authenticatedUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);
  authenticatedUser$: Observable<User> = this.authenticatedUserSubject.asObservable();

  constructor(
    private api: ApiService,
    private tokenService: TokenService,
  ) { }

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
        this.isAuthenticatedSubject.next(true);
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
        this.isAuthenticatedSubject.next(false);
        this.authenticatedUserSubject.next({} as User);
      }),
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

  getUser(userId: number): Observable<User> {
    const path = this.api.replaceParams(
      `${this.URL_PREFIX}${this.USER_DETAIL_UPDATE_DELETE_PATH}`,
      { userId: userId }
    );

    return this.api.get<User>(path);
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
