import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  readonly REPLACE_NAMES = {
    'password2': 'password confirmation',
  };

  readonly REPLACE_ERRORS = {
    'This field may not be null.':
      'This field is required.',
  }

  capitalizeFieldNames(errors: { [key: string]: any }): { [key: string]: any } {
    const newObj: any = {};

    Object.keys(errors).forEach((key) => {
      let newValue = this.replaceError(errors[key]);

      let newKey = this.REPLACE_NAMES[key]
        ? this.REPLACE_NAMES[key]
        : key;
        
      newKey = newKey.replace('_', ' ');
      newKey = newKey[0].toUpperCase() + newKey.substr(1).toLowerCase();

      newObj[newKey] = newValue;
    });

    return newObj;
  }

  replaceError(error: any): string {
    let newErr = '';

    if (error.length) {
      error.forEach((err) => {
        err = this.REPLACE_ERRORS[err]
          ? this.REPLACE_ERRORS[err]
          : err;

        newErr = newErr.concat(` ${err}`).trim();
      });
    } else {
      newErr = this.REPLACE_ERRORS[error]
          ? this.REPLACE_ERRORS[error]
          : newErr;
    }

    return newErr.toLowerCase();
  }
}
