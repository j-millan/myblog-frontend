import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: '',
})
export class BaseComponent implements OnDestroy {
  subscriptions: Subscription[] = [];

  constructor() { 

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => (sub.unsubscribe()));    
  }
}
