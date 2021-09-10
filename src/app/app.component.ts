import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Trello';
  items: string[] = ['one', 'two', 'three'];

  dragOverItem(event): void {
    console.log(event);
  }
}
