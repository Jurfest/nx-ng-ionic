import { Component, inject, OnInit } from '@angular/core';
import { ClientFacade, Task, TaskFacade } from '@nx-ng-ionic/todo/domain';

/**
 * This base component also will not have its own template, as it will be inherited.
 * It is implemented as a non-abstract class for maximum code reuse.
 */
@Component({
  template: '',
})
export class TaskBaseComponent implements OnInit {
  protected taskFacade = inject(TaskFacade);
  protected clientFacade = inject(ClientFacade);

  taskList$ = this.taskFacade.taskList$;
  clientList$ = this.clientFacade.clientList$;

  ngOnInit(): void {
    this.loadTasks();
    this.loadClients();
  }

  protected loadTasks(): void {
    this.taskFacade.loadTaskList();
  }

  protected loadClients(): void {
    this.clientFacade.loadClientList();
  }

  protected deleteTask(id: string): void {
    this.taskFacade.deleteTask(id);
  }

  protected updateTask(task: Task): void {
    this.taskFacade.updateTask(task);
  }
}
