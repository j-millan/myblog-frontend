import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ]
})
export class CoreModule { }
