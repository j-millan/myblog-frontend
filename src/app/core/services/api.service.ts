import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'https://127.0.0.1:800/'

  constructor(
    private http: HttpClient
  ) { }

  replaceParams(url: string, params: any = {}): string {
    Object.keys(params).forEach((key) => {
      url.replace(key, params[key])  
    })

    return url;
  }

  post<RT>(path: string, data: any = {}): Observable<RT> {
    const url = `${this.API_URL}${path}`
    return this.http.post<RT>(url, data);
  }

  get<RT>(path: string): Observable<RT> {
    const url = `${this.API_URL}${path}`
    return this.http.get<RT>(url);
  }

  put<RT>(path: string, data: any = {}): Observable<RT> {
    const url = `${this.API_URL}${path}`;
    return this.http.put<RT>(url, data);
  }

  delete(path: string, data: any = {}): Observable<void> {
    const url = `${this.API_URL}${path}`;
    return this.http.request<void>('delete', url, { body: data });
  }
}
