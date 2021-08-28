import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { RouterModule } from '@angular/router';
import { FormErrorAlertComponent } from './components/form-error-alert/form-error-alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EllipsisModule } from 'ngx-ellipsis';
import { AlertComponent } from './components/alert/alert.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    EllipsisModule,
    NgScrollbarModule,
  ],
  declarations: [
    TextInputComponent,
    FormErrorAlertComponent,
    AlertComponent,
    ButtonComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EllipsisModule,
    NgScrollbarModule,
    NgbModule,
    RouterModule,
    TextInputComponent,
    FormErrorAlertComponent,
    AlertComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
