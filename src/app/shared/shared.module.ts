import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { RouterModule } from '@angular/router';
import { FormErrorAlertComponent } from './components/form-error-alert/form-error-alert.component';
import { BlogPostCardComponent } from './components/blog-post-card/blog-post-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [
    TextInputComponent,
    FormErrorAlertComponent,
    BlogPostCardComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    TextInputComponent,
    FormErrorAlertComponent,
    BlogPostCardComponent,
  ],
})
export class SharedModule { }
