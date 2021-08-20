import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from 'src/app/modules/auth/pages/sign-up/sign-up.component';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  columnSize: number = 5;

  constructor() { }

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
