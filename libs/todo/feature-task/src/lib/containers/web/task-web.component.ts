import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBaseComponent } from '../task-base.component';

@Component({
  selector: 'todo-task-web',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-web.component.html',
  styleUrl: './task-web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskWebComponent extends TaskBaseComponent {}

export default TaskWebComponent;
