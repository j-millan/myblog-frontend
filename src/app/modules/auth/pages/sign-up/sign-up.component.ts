import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { BaseComponent } from 'src/app/base.component';
import { UserService } from 'src/app/core/services/user.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { AuthConstants } from '../../constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent 
extends BaseComponent
implements OnInit {

  registerForm: FormGroup;
  formErrors: any = null;
  loading: boolean = false;
  readonly FIELDS = AuthConstants.SIGN_UP_FIELDS;

  successfulRegister: boolean;
  
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService,
  ) { 
    super();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    const group = {};
    const emptyRequiredField = [null, Validators.required];
    
    Object.values(this.FIELDS).forEach((fieldName) =>
      (group[fieldName] = emptyRequiredField),
    );
    
    this.registerForm = this.fb.group(group);
  }

  attemptSignUp(): void {
    this.loading = true;
    const requestData = this.registerForm.value;

    this.subscriptions.push(
      this.userService
        .register(requestData)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe(
          (res) => {
            this.router.navigateByUrl('/auth/login');
            this.commonService.showSuccessfulRegistrationMessage = true;
          },
          (res) =>
            (this.formErrors = res.error),
        ),
    );
  }

}
