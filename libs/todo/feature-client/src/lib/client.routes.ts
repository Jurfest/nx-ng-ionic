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
        title: 'Toon Galaxy | Home',
        loadComponent: () =>
          import('./client.component'),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

export default CLIENT_ROUTES;
