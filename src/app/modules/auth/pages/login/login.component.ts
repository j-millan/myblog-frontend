import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base.component';
import { LoginRequest } from 'src/app/core/models/login-request';
import { UserService } from 'src/app/core/services/user.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { AuthConstants } from '../../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  errors: any;
  loading: boolean = false;
  readonly FIELDS = AuthConstants.LOGIN_FIELDS;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private commonService: CommonService,
  ) {
    super();
  }

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
    this.loading = true;
    const requestData: LoginRequest = this.loginForm.value;

    this.subscriptions.add(
      this.userService.login(requestData)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe(
          (res) => this.goToHome(),
          (res) => (this.errors = res.error),
        ),
    );
  }

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.commonService.showSuccessfulRegistrationMessage = false;
  }
}
