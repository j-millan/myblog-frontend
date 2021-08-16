import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headersConfig: any = {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    };

    const token = this.tokenService.getToken();
    const key = 'Authorization'

    if (token) {
      headersConfig[key] = `Token ${token}`
    }
    
    const req = request.clone({ setHeaders: headersConfig })
    return next.handle(req);
  }
}
