import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';
import { UserService } from 'src/app/core/services/user.service';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent extends BaseComponent {
  @Input() isOpen: boolean = false;

  constructor(
    public userService: UserService,
    public commonService: CommonService,
  ) { 
    super(userService);
  }

  onLogoutClick(): void {
    this.userService.logout().subscribe();
  }
}
