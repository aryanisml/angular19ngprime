import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import  TruckRentalPreset  from './style';


export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: TruckRentalPreset,
      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
/*
import { ApplicationConfig, provideZoneChangeDetection, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import TruckRentalPreset from './style';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF, DatePipe } from '@angular/common';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { TranslateService, TranslateModule, TranslateLoader } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Store, StoreModule } from '@ngrx/store';
import { Reducers } from './store/reducers';
import { AppEffectsModule } from './store/effects/effects.module';
import { AppInitService } from './services/app-init.service';
import { LocalAuthInterceptor } from 'src/local-auth-interceptor';
import { jwtDecode } from 'jwt-decode';
import { updateUserData } from './store/actions';
import { CustomJwtPayload } from './utils/interface/widget.interface';

// Reuse the same factories from your original app.module.ts
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(
    httpClient,
    (window as any).env.baseUrl + '/assets/i18n/',
    '.json?v=' + Date.now(),
  );
}

export function appInitializerFactory(translate: TranslateService) {
  return () => {
    const lang = translate.getBrowserLang() || 'en';
    return translate.use(lang).toPromise();
  };
}

export function init_app(appLoadService: AppInitService) {
  return () => {
    return appLoadService.init().then(async () => {
      return Promise.resolve();
    });
  };
}

export function initializeKeycloak(
  keycloak: KeycloakService,
  appLoadService: AppInitService,
  store: Store
) {
  return () => {
    return keycloak
      .init({
        config: {
          url: (window as any).env.auth_server_base_url,
          realm: 'ocpsso',
          clientId: (window as any).env.auth_server_client_id ? (window as any).env.auth_server_client_id : 'call-to-action-ui',
        },
        initOptions: {
          onLoad: 'login-required',
          pkceMethod: 'S256',
        },
      })
      .then(() => {
        keycloak.getToken().then(token => {
          const user = jwtDecode<CustomJwtPayload>(token);
          store.dispatch(updateUserData({ name: user.name || '' }));
        });
        return init_app(appLoadService)();
      });
  };
}

const authProviders = (window as any).env.auth_server_base_url === undefined
  ? [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: LocalAuthInterceptor,
        multi: true,
      }
    ]
  : [
      {
        provide: APP_INITIALIZER,
        useFactory: initializeKeycloak,
        multi: true,
        deps: [KeycloakService, AppInitService, Store],
      }
    ];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: TruckRentalPreset,
      }
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    
    // Import the necessary modules
    importProvidersFrom(
      StoreModule.forRoot(Reducers),
      AppEffectsModule,
      KeycloakAngularModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    
    // Add services and providers
    AppInitService,
    DatePipe,
    {
      provide: APP_BASE_HREF,
      useValue: '/' + (window.location.pathname.split('/')[1] || ''),
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Store],
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitService: AppInitService) => {
        return () => appInitService.initFeatureFlags();
      },
      multi: true,
      deps: [AppInitService],
    },
    
    // Add the auth providers
    ...authProviders
  ],
};
*/