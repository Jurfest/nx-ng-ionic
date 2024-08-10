import {
  Component,
  inject,
  ChangeDetectionStrategy,
  input,
  output,
} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Client, Task } from '@nx-ng-ionic/todo/domain';

@Component({
  selector: 'todo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    TitleCasePipe,
    DatePipe,
  ],
})
export class DashboardComponent {
  taskList = input.required<Task[]>();
  updateEmmiter = output<Task>();
  removeEmmiter = output<string>();

  onUpdate(task: Task): void {
    this.updateEmmiter.emit(task);
  }

  onRemove(taskId: string): void {
    this.removeEmmiter.emit(taskId);
  }
}
