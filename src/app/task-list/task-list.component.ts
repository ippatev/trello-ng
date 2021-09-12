import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TaskListComponent implements OnInit {
  @Input() msg: string;

  constructor() {}

  ngOnInit(): void {}
}
