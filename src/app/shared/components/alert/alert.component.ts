import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() theme: string = 'success';
  @Input() icon: string = 'check-circle';
  @Output() closeClicked: EventEmitter<void> = new EventEmitter<void>(); 
  
  onCloseClick(): void {
    this.closeClicked.emit();
  }
}
