import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './main-layout/components/navbar/navbar.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    MainLayoutComponent,
  ]
})
export class LayoutModule { }
