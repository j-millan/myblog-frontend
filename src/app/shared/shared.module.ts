import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TextInputComponent } from './components/text-input/text-input.component';
import { RouterModule } from '@angular/router';
import { FormErrorAlertComponent } from './components/form-error-alert/form-error-alert.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    TextInputComponent,
    FormErrorAlertComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TextInputComponent,
    FormErrorAlertComponent,
  ],
})
export class SharedModule { }
