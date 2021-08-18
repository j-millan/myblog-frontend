import { Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { User } from './core/models/user';
import { UserService } from './core/services/user.service';

@Component({
  templateUrl: '',
})
export class BaseComponent {
  currentUser$: Observable<User>;
  
  constructor(private userService: UserService) {
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
