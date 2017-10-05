import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberCreated = new EventEmitter<number>();

  // private number: number = 0;
  private timer;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      // this.number++;
      // this.numberCreated.emit(this.number);
      this.numberCreated.emit(Math.round(Math.random() * 100));
    }, 50);
  }

  stopGame() {
    clearInterval(this.timer);
  }

}
