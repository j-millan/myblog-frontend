import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base.component';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent 
extends BaseComponent
implements OnInit {

  constructor(
    userService: UserService,
  ) { 
    super(userService);
  }

  ngOnInit(): void {
  }

}
