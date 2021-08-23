import { Component, Input, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form-error-alert',
  templateUrl: './form-error-alert.component.html',
  styleUrls: ['./form-error-alert.component.scss']
})
export class FormErrorAlertComponent {
  @Input() set errors(errors: any) {
    this._errors = errors 
      ? this.formService.capitalizeFieldNames(errors)
      : errors;
  };

  get errors() {
    return this._errors;
  }

  _errors: any;

  constructor(private formService: FormService) {}
}
