import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFacade } from '@nx-ng-ionic/todo/domain';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'todo-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  private taskFacade = inject(TaskFacade);

  taskList$ = this.taskFacade.taskList$;

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.taskFacade.load();
  }
}

export default TaskComponent;
