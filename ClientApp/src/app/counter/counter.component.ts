import { Component } from '@angular/core';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
    throw new Error('This is error!!');
  }
}
