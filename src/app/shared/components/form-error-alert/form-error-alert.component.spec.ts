import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorAlertComponent } from './form-error-alert.component';

describe('FormErrorAlertComponent', () => {
  let component: FormErrorAlertComponent;
  let fixture: ComponentFixture<FormErrorAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErrorAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
