import { Routes } from '@angular/router';

export const CLIENT_ROUTES: Routes = [
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
        title: 'Task Connect | Clients',
        loadComponent: () =>
          import('./containers/web/client-web.component'),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

export default CLIENT_ROUTES;
