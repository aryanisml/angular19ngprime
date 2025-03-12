import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeng/themes/aura'; // ✅ Correct import for PrimeNG 19
import { routes } from './app.routes';
import { SwapnilPreset } from './style';
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: SwapnilPreset, // ✅ Ensures Aura theme is applied
        options: {
          darkModeSelector: '.my-app-dark'
      }
      },
      
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
