import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;

  defaultSubscription = 'advanced';

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.error('Invalid Form!');
    }
  }
}
