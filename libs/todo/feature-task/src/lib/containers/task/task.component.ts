import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InputComponent } from '@nx-ng-ionic/shared/ui-components';
import { Task, TaskViewModel } from '@nx-ng-ionic/todo/domain';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  startWith,
  take,
  tap,
} from 'rxjs';

import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TaskModalComponent } from '../../components/modal/task-modal.component';
import { TaskBaseComponent } from '../task-base.component';

@Component({
  selector: 'todo-task-web',
  standalone: true,
  imports: [
    CommonModule,
    DashboardComponent,
    InputComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
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

  searchTasksForm = this.fb.group({
    searchTitle: [''],
    selectedStatus: [''],
    selectedClient: [''],
  });

  constructor() {
    super();
    // Load tasks
    const debounceSearchInput$ =
      this.searchTasksForm.controls.searchTitle.valueChanges.pipe(
        debounceTime(300)
      );
    debounceSearchInput$
      .pipe(
        startWith(''),
        distinctUntilChanged(),
        tap((searchTitle) => this.loadTasks(searchTitle || '')),
        takeUntilDestroyed()
      )
      .subscribe();
  }

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

  onFilter(): void {
    // this.filteredTaskList = this.taskList$.pipe(
    //   map((taskList) =>
    //     taskList.filter(
    //       (task) =>
    //         task.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
    //         (this.selectedStatus === '' ||
    //           task.status === this.selectedStatus) &&
    //         (this.selectedUser === '' || task.userId === this.selectedUser)
    //     )
    //   )
    // );
  }
}

export default TaskComponent;
