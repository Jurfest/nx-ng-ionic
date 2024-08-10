import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TaskBaseComponent } from '../task-base.component';

@Component({
  selector: 'todo-task-web',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './task-web.component.html',
  styleUrl: './task-web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskWebComponent extends TaskBaseComponent {}

export default TaskWebComponent;
