import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';
import { UserService } from 'src/app/core/services/user.service';
import { SignUpComponent } from 'src/app/modules/auth/pages/sign-up/sign-up.component';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent 
extends BaseComponent
implements OnInit {

  columnSize: number = 5;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    super();

    this.subscriptions.push(
      userService.authenticatedUser$.subscribe((user) => {
        if (user) {
          this.router.navigateByUrl('/home');
        }
      }),
    );
  }

  ngOnInit(): void {
  }

  componentActivated(component: any): void {
    if (component instanceof SignUpComponent) {
      this.columnSize = 6;
    } else {
      this.columnSize = 5;
    }
  }

}
