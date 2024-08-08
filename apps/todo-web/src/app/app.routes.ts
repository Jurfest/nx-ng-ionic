import { Route } from '@angular/router';

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
        path: '**',
        redirectTo: 'clients',
      },
    ],
  },
];
