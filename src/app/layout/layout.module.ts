import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './main-layout/components/navbar/navbar.component';
import { SideMenuComponent } from './main-layout/components/side-menu/side-menu.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent,
    SideMenuComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    MainLayoutComponent,
  ]
})
export class LayoutModule { }
