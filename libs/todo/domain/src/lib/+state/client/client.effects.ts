import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ClientDataService } from '../../infrastructure/client.data.service';
import { clientActions } from './client.actions';

@Injectable()
export class ClientEffects {
  private actions$ = inject(Actions);
  private clientDataService = inject(ClientDataService);

  loadClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.loadClient),
      switchMap((/* action */) =>
        this.clientDataService.loadCLients().pipe(
          map((clientList) => clientActions.loadClientSuccess({ clientList })),
          catchError((error) => of(clientActions.loadClientFailure({ error })))
        ))
    )
  );

  addClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.addClient),
      switchMap((action) =>
        this.clientDataService.createClient(action.client).pipe(
          map((client) => clientActions.addClientSuccess({ client })),
          catchError((error) =>
            of(clientActions.addClientFailure({ error }))
          )
        )
      )
    )
  );

  updateClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.updateClient),
      switchMap((action) =>
        this.clientDataService.updateClient(action.client).pipe(
          map((client) => clientActions.updateClientSuccess({ client })),
          catchError((error) =>
            of(clientActions.updateClientFailure({ error }))
          )
        )
      )
    )
  );

  deleteClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.deleteClient),
      switchMap((action) =>
        this.clientDataService.deleteCLient(action.id).pipe(
          map(() => clientActions.deleteClientSuccess({ id: action.id })),
          catchError((error) =>
            of(clientActions.deleteClientFailure({ error }))
          )
        )
      )
    )
  );
}
