import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';
import { UserService } from 'src/app/core/services/user.service';
import { SignUpComponent } from 'src/app/modules/auth/pages/sign-up/sign-up.component';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent extends BaseComponent {

  columnSize: number = 5;

  constructor(
    private userService: UserService,
    private router: Router,
    public commonService: CommonService,
  ) {
    super();

    this.subscriptions.add(
      userService.authenticatedUser$.subscribe((user) => {
        if (user) {
          this.router.navigateByUrl('/home');
        }
      }),
    );
  }

  componentActivated(component: any): void {
    if (component instanceof SignUpComponent) {
      this.columnSize = 6;
    } else {
      this.columnSize = 5;
    }
  }
}
