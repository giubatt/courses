import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activateCounter = 0;
  deactivateCounter = 0;

  constructor() { }

  countActivated() {
    this.activateCounter += 1;
    console.log('Activate Counter: ', this.activateCounter);
  }

  countDeactivated() {
    this.deactivateCounter += 1;
    console.log('Deactivate Counter: ', this.deactivateCounter);
  }
}
