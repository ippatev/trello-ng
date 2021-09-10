import {
  Component,
  HostListener,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TaskListItemComponent implements OnInit {
  @Output() dragOver = new EventEmitter();
  selected = false;

  constructor() {}
  ngOnInit(): void {}

  @HostListener('dragstart', ['$event'])
  onDragStart(event): void {
    this.selected = true;
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event): void {
    this.selected = false;
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event): void {
    this.dragOver.emit(event);
  }
}
