import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  clicks = [];

  logClick() {
    this.clicks.push({
      ts: Date.now()
    })
  }
}
