import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/core/models/login-request';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form?: FormGroup;

  INPUT_USERNAME = 'username';
  INPUT_PASSWORD = 'password';
  
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }
  
  ngOnInit(): void {
    this.buildForm();

    this.form.valueChanges.subscribe((_) => (console.debug(this.form.value)))
  }

  private buildForm(): void {
    const group: any = {};

    group[this.INPUT_USERNAME] = [null, Validators.required];
    group[this.INPUT_PASSWORD] = [null, Validators.required];

    this.form = this.fb.group(group);
  }

  attemptLogin(): void {
    console.debug(123);
    const requestData: LoginRequest = this.form.value;
    
    this.userService.login(requestData).subscribe((res) => {
      console.debug(res);
    })
  }

}
