import { Route } from '@angular/router';
import { TaskComponent } from '@nx-ng-ionic/todo/feature-task';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full',
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('@nx-ng-ionic/todo/feature-client').then(
            (m) => m.CLIENT_ROUTES
          ),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('@nx-ng-ionic/todo/feature-task').then((m) => m.TASK_ROUTES),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('@nx-ng-ionic/todo/feature-about').then(
            (m) => m.AboutComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'clients',
      },
    ],
  },
];
