import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerializerService {
  objectToQuery(object: { [key: string]: any }): string {
    let query = '?';
    for (const key in object) {
      if (this.isValid(object, key)) {
        const symbol = query === '?' ? '' : '&';
        query += `${symbol}${key}=${object[key]}`;
      }
    }
    return query;
  }

  private isValid(object: { [k: string]: any }, key: string): boolean {
    return object[key] !== '' && object[key] !== null;
  }
}
