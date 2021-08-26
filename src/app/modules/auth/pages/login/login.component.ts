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
export class LoginComponent 
implements OnInit {
  loginForm: FormGroup;
  errors: any;
  readonly FIELDS = AuthConstants.LOGIN_FIELDS;

  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {  }
  
  ngOnInit(): void {
    this.buildForm();
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
      .subscribe(
        (res) => 
          (this.goToHome()),
        (res) =>
          (this.errors = res.error),
      );
  }

  goToHome(): void  {
    this.router.navigateByUrl('/home');
  }

}
