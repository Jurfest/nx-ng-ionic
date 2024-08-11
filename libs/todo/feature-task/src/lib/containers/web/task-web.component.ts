import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Task, TaskViewModel } from '@nx-ng-ionic/todo/domain';
import { filter, take, tap } from 'rxjs';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TaskModalWebComponent } from '../../components/web/modal/task-modal-web.component';
import { TaskBaseComponent } from '../task-base.component';

@Component({
  selector: 'todo-task-web',
  standalone: true,
  imports: [CommonModule, DashboardComponent, ReactiveFormsModule],
  templateUrl: './task-web.component.html',
  styleUrl: './task-web.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskWebComponent extends TaskBaseComponent {
  private fb = inject(FormBuilder);
  readonly dialog = inject(MatDialog);

  taskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    creationDate: ['', Validators.required],
    dueDate: ['', Validators.required],
    status: ['', Validators.required],
    userId: [''],
  });

  openModal(task: Task): void {
    if (task) {
      this.taskForm.patchValue(task);
    } else {
      this.taskForm.reset();
    }

    const dialogRef = this.dialog.open(TaskModalWebComponent, {
      data: {
        type: task ? 'Update task' : 'Add task',
        taskForm: this.taskForm,
        // task: task || {},
      },
    });

    dialogRef
      .afterClosed()
      .pipe(
        take(1),
        filter((result) => !!result),
        tap(() => {
          if (task) {
            const updatedTask: Task = {
              ...task,
              title: this.taskForm.controls.title.value || '',
              description: this.taskForm.controls.description.value || '',
              creationDate: this.taskForm.controls.creationDate.value || '',
              dueDate: this.taskForm.controls.dueDate.value || '',
              userId: this.taskForm.controls.userId.value || '',
              status:
                this.taskForm.controls.status.value === 'pending'
                  ? 'pending'
                  : this.taskForm.controls.status.value === 'in-progress'
                  ? 'in-progress'
                  : 'done',
            };
            this.updateTask(updatedTask);
          } else {
            const newTask: TaskViewModel = {
              ...this.taskForm.value,
              title: this.taskForm.controls.title.value || '',
              description: this.taskForm.controls.description.value || '',
              creationDate: this.taskForm.controls.creationDate.value || '',
              dueDate: this.taskForm.controls.dueDate.value || '',
              userId: this.taskForm.controls.userId.value || '',
              status:
                this.taskForm.controls.status.value === 'pending'
                  ? 'pending'
                  : this.taskForm.controls.status.value === 'in-progress'
                  ? 'in-progress'
                  : 'done',
            };
            this.addTask(newTask);
          }
        })
      )
      .subscribe();
  }
}

export default TaskWebComponent;
