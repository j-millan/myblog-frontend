import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent 
extends BaseComponent
implements OnInit {

  @Input() isOpen: boolean = false;
  
  constructor(
    userService: UserService,
    private router: Router,
  ) { 
    super(userService);
  }

  ngOnInit(): void {
  }

  onLogoutClick(): void {
    this.userService.logout().subscribe();
  }
}
