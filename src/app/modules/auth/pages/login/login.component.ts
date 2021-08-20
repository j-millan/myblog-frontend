import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/core/models/login-request';
import { UserService } from 'src/app/core/services/user.service';
import { AuthConstants } from '../../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  readonly FIELDS = AuthConstants.LOGIN_FIELDS;

  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.userService.isAuthenticated$.subscribe((auth) => {
      if (auth) {
        this.goToHome();
      }
    });
  }
  
  ngOnInit(): void {
    this.buildForm();

    this.loginForm.valueChanges.subscribe((_) => (console.debug(this.loginForm.value)))
  }

  private buildForm(): void {
    const group: any = {};

    group[this.FIELDS.USERNAME] = [null, Validators.required];
    group[this.FIELDS.PASSWORD] = [null, Validators.required];

    this.loginForm = this.fb.group(group);
  }

  attemptLogin(): void {
    const requestData: LoginRequest = this.loginForm.value;
    
    this.userService
      .login(requestData)
      .subscribe((res) => 
        (this.goToHome()),
      );
  }

  goToHome(): void  {
    this.router.navigateByUrl('/home');
  }

}
