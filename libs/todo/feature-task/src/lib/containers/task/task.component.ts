import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Task, TaskViewModel } from '@nx-ng-ionic/todo/domain';
import { filter, take, tap } from 'rxjs';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TaskModalComponent } from '../../components/modal/task-modal.component';
import { TaskBaseComponent } from '../task-base.component';

@Component({
  selector: 'todo-task-web',
  standalone: true,
  imports: [
    CommonModule,
    DashboardComponent,
    ReactiveFormsModule,
    MatButton,
    MatIcon,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent extends TaskBaseComponent {
  private fb = inject(FormBuilder);
  readonly dialog = inject(MatDialog);

  taskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    dueDate: ['', Validators.required],
    status: ['', Validators.required],
    userId: [''],
  });

  openModal(task?: Task): void {
    if (task) {
      this.taskForm.patchValue(task);
    } else {
      this.taskForm.reset();
    }

    const dialogRef = this.dialog.open(TaskModalComponent, {
      data: {
        type: task ? 'update' : 'create',
        taskForm: this.taskForm,
        clientList$: this.clientList$ || [],
      },
    });

    dialogRef
      .afterClosed()
      .pipe(
        take(1),
        filter((result) => !!result && this.taskForm.valid),
        tap(() => {
          if (task) {
            const updatedTask: Task = {
              ...task,
              title: this.taskForm.controls.title.value || '',
              description: this.taskForm.controls.description.value || '',
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
              creationDate: new Date().toISOString(),
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

export default TaskComponent;
