import { Injectable } from '@angular/core';
import { constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  showSuccessfulRegistrationMessage: boolean = false;
  
  constructor() { }

  getFileUrl(path: string): string {
    return constants.API_URL + path.substr(1);
  }
}
