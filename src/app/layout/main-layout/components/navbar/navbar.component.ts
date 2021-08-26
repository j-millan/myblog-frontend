import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Output() menuButtonClicked = new EventEmitter<boolean>();

  searchForm: FormGroup;
  isMenuActive: boolean = false;
  
  currentUser$ = this.userService.authenticatedUser$;
  
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ) { 
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
