import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template:
  `
    <h1 class="app-title">
      Welcome to {{ title }}!
    </h1>
    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List APP';
  userLoggedIn = false;
  

}
