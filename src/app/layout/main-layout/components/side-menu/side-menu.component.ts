import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  @Input() isOpen: boolean = false;

  currentUser$ = this.userService.authenticatedUser$;

  constructor(
    private userService: UserService,
    public commonService: CommonService,
  ) { }

  onLogoutClick(): void {
    this.userService.logout().subscribe();
  }
}
