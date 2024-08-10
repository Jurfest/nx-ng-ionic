import { Routes } from '@angular/router';

export const TASK_ROUTES: Routes = [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '',
        title: 'Task Connect | Tasks',
        loadComponent: () =>
          import('./containers/web/task-web.component'),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

export default TASK_ROUTES;
