import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { AuthConstants } from '../../constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  formErrors: any = null;
  readonly FIELDS = AuthConstants.SIGN_UP_FIELDS;
  
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
  ) { 
    this.userService.isAuthenticated$.subscribe((auth) => {
      if (auth) {
        this.router.navigateByUrl('/home');
      }
    });
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
    const requestData = this.registerForm.value;

    this.userService
      .register(requestData)
      .subscribe(
        (res) =>
          (this.router.navigateByUrl('/auth/login')),
        (res) =>
          (this.formErrors = res.error),
      );
  }

}