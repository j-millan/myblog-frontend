import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { constants } from 'src/app/constants';
import { SerializerService } from 'src/app/data/services/serializer.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = constants.API_URL;

  constructor(
    private http: HttpClient,
    private serializer: SerializerService,
  ) { }

  replaceParams(url: string, params: any = {}): string {
    Object.keys(params).forEach((key) => {
      url = url.replace(key, params[key]);
    })

    return url;
  }

  getQuerystring(filter: any): string | void {
    if (filter != {}) {
      return this.serializer.objectToQuery(filter);
    }
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
