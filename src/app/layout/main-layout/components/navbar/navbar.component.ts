import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/base.component';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends BaseComponent {

  @Output() menuButtonClicked = new EventEmitter<boolean>();
  
  searchForm: FormGroup;
  isMenuActive: boolean = false;

  constructor(
    userService: UserService,
    private fb: FormBuilder,
  ) { 
    super(userService);
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: [null, Validators.required],
    });
  }

  performSearch(): void {
    console.debug(this.searchForm.value);
  }

  menuClicked(): void {
    this.isMenuActive = !this.isMenuActive;
    this.menuButtonClicked.emit(this.isMenuActive);
  }
}
