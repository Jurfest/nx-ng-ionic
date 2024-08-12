import { Component, inject } from '@angular/core';
import {
  ClientFacade,
  Task,
  TaskFacade,
  TaskViewModel,
} from '@nx-ng-ionic/todo/domain';

/**
 * This base component also will not have its own template, as it will be inherited.
 * It is implemented as a non-abstract class for maximum code reuse.
 *
 * Currently, components in feature task are hybrid (ng + ng-ionic),
 * nevertheless, for easy extension, this architecture that facilitates easily
 * customization for both desktop or mobile apps is implemented already.
 */
@Component({
  template: '',
})
export class TaskBaseComponent {
  protected taskFacade = inject(TaskFacade);
  protected clientFacade = inject(ClientFacade);

  taskList$ = this.taskFacade.taskList$;
  clientList$ = this.clientFacade.clientList$;

  constructor() {
    // NOTE: - Load tasks in subclass

    // Load clients
    this.loadClients();
  }

  protected loadTasks(searchTitle: string): void {
    this.taskFacade.loadTaskList(searchTitle);
  }

  protected loadClients(): void {
    this.clientFacade.loadClientList();
  }

  protected addTask(task: TaskViewModel): void {
    this.taskFacade.addTask(task);
  }

  protected updateTask(task: Task): void {
    this.taskFacade.updateTask(task);
  }

  protected deleteTask(id: string): void {
    this.taskFacade.deleteTask(id);
  }
}
