import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { RouterModule } from '@angular/router';
import { FormErrorAlertComponent } from './components/form-error-alert/form-error-alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EllipsisModule } from 'ngx-ellipsis';
import { AlertComponent } from './components/alert/alert.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    EllipsisModule,
  ],
  declarations: [
    TextInputComponent,
    FormErrorAlertComponent,
    AlertComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EllipsisModule,
    NgbModule,
    RouterModule,
    TextInputComponent,
    FormErrorAlertComponent,
    AlertComponent,
  ],
})
export class SharedModule { }
