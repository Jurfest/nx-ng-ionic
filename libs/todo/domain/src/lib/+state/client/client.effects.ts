import { inject, Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { clientActions } from './client.actions';
import { ClientDataService } from '../../infrastructure/client.data.service';

@Injectable()
export class ClientEffects {
  private actions$ = inject(Actions);
  private clientDataService = inject(ClientDataService);

  loadClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clientActions.loadClient),
      switchMap((/* action */) =>
        this.clientDataService.load().pipe(
          map((clientList) => clientActions.loadClientSuccess({ clientList })),
          catchError((error) => of(clientActions.loadClientFailure({ error })))
        ))
    )
  );
}
