import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule { }
