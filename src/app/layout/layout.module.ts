import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    MainLayoutComponent,
  ]
})
export class LayoutModule { }
