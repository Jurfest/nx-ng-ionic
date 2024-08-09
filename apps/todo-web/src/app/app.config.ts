import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withPreloading } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  errorInterceptor,
  headerInterceptor,
  loadingInterceptor,
} from '@nx-ng-ionic/shared/util-common';
import { provideTodoDomain } from '@nx-ng-ionic/todo/domain';
import { quicklinkProviders, QuicklinkStrategy } from 'ngx-quicklink';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(
      /**
       * NOTE: event replay is in developer preview in NG 18
       */
      withEventReplay()
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withPreloading(QuicklinkStrategy)),
    quicklinkProviders,
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([
        loadingInterceptor,
        headerInterceptor,
        errorInterceptor,
      ]),
      withFetch()
    ),
    provideStore(),
    provideEffects([]),
    ...(isDevMode() ? [provideStoreDevtools()] : []),
    provideTodoDomain(),
  ],
};
