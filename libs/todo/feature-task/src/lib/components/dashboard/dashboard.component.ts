import { AsyncPipe, DatePipe, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Task } from '@nx-ng-ionic/todo/domain';

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
  openModalEmmiter = output<Task>();
  removeEmmiter = output<string>();

  openModal(task: Task): void {
    this.openModalEmmiter.emit(task);
  }

  onRemove(taskId: string): void {
    this.removeEmmiter.emit(taskId);
  }
}
