import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  get difference() {
    return Math.abs(this.evenNumbers.length - this.oddNumbers.length);
  }

  get percentageDiff() {
    return Math.round(Math.abs(1 - this.oddNumbers.length / this.evenNumbers.length) * 100);
  }

  onNumberCreated(number) {
    number % 2 === 0 ? this.evenNumbers.push(number) : this.oddNumbers.push(number);
  };
}
