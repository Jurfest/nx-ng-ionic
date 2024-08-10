import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-task-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-mobile.component.html',
  styleUrl: './task-mobile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskMobileComponent {}
