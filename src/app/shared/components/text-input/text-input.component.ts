import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
  @Input() placeholder: string = "Enter value"
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() icon: string;
  @Input() password: boolean = false;
  @Input() addonText: string;
  @Input() addonIcon: string;

  @Output() addonClicked: EventEmitter<void> = new EventEmitter<void>();

  onAddonClick(): void {
    this.addonClicked.emit();
  }
}
