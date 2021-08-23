import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-error-alert',
  templateUrl: './form-error-alert.component.html',
  styleUrls: ['./form-error-alert.component.scss']
})
export class FormErrorAlertComponent {
  @Input() errors: any;
}
