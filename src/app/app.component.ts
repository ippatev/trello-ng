import { Component, OnInit, ViewChild } from '@angular/core';
import { DraggableServiceService } from './draggable-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Trello';
  items: string[] = ['one', 'two', 'three'];

  @ViewChild('tasksList') tasksListElement: any;
	@ViewChild('taskListItem') taskElements: any;    
  
  constructor(private draggableService: DraggableServiceService) {}

  ngOnInit(): void {
  }

  dragOverItem(event): void {
    event.preventDefault();

    const activeElement = this.tasksListElement.querySelector(`.selected`);
    const currentElement = event.target;
    const isMoveable =
      activeElement !== currentElement &&
      currentElement.classList.contains(`tasks__item`);

    if (!isMoveable) {
      return;
    }
    const nextElement = this.getNextElement(event.clientY, currentElement);

    if (
      (nextElement && activeElement === nextElement.previousElementSibling) ||
      activeElement === nextElement
    ) {
      return;
    }
    this.tasksListElement.insertBefore(activeElement, nextElement);
  }

  getNextElement = (cursorPosition, currentElement) => {
    const currentElementCoord = currentElement.getBoundingClientRect();
    const currentElementCenter =
      currentElementCoord.y + currentElementCoord.height / 2;

    const nextElement =
      cursorPosition < currentElementCenter
        ? currentElement
        : currentElement.nextElementSibling;

    return nextElement;
  };
}
