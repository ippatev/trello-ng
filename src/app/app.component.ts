import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  Renderer2,
} from '@angular/core';
import { DraggableServiceService } from './draggable-service.service';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Trello';
  items: string[] = ['one', 'two', 'three'];

  @ViewChild('tasksList', { read: ElementRef, static: false })
  tasksListElement: any;
  @ViewChild(TaskListItemComponent, { static: false, read: ElementRef })
  taskElements: any;

  constructor(
    private draggableService: DraggableServiceService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  dragOverItem(event): void {
    event.preventDefault();

    const activeElement =
      this.tasksListElement.nativeElement.querySelector(`.selected`);
    console.log(activeElement);
    const currentElement = event.target;
    const isMoveable =
      activeElement !== currentElement &&
      currentElement.classList.contains(`tasks__item`);

    if (!isMoveable) {
      return;
    }
    const nextElement = this.draggableService.getNextElement(
      event.clientY,
      currentElement
    );

    if (
      (nextElement && activeElement === nextElement.previousElementSibling) ||
      activeElement === nextElement
    ) {
      return;
    }
    this.renderer.insertBefore(
      this.tasksListElement.nativeElement,
      activeElement,
      nextElement
    );
  }
}
