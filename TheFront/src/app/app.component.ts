import { Component } from '@angular/core';
import { fade } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ fade ]
})
export class AppComponent {
  title = 'TheFront';
  animState = 'Login';
  logCheck = true;
  constructor() {}

  test() {
    console.log(this.animState);
  }
}
