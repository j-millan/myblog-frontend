import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { constants } from './constants';
import { User } from './core/models/user';
import { ApiService } from './core/services/api.service';
import { UserService } from './core/services/user.service';

@Component({
  templateUrl: '',
})
export class BaseComponent {
  currentUser$: Observable<User>;
  
  constructor(public userService: UserService) {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.currentUser$ = combineLatest([
      this.userService.isAuthenticated$,
      this.userService.authenticatedUser$,
    ]).pipe(
      map(([isAuthenticated, user]) => 
        isAuthenticated ? user : null,
      ),
    );
  }
}
