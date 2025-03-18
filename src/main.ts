import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';
import { Router } from '@angular/router';

// Check if we're running in development mode with ng serve
// or as a custom element in a different context
const isStandalone = document.querySelector('planner-reservation') === null;

if (isStandalone) {
  // Normal Angular application for development with ng serve
  bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error('Error bootstrapping app:', err));
} else {
  // Custom element mode
  createApplication(appConfig)
    .then((appRef) => {
      const injector = appRef.injector;
      
      // Get the router and initialize navigation
      try {
        const router = injector.get(Router);
        router.initialNavigation();
      } catch (e) {
        console.error('Error initializing router:', e);
      }
      
      // Create and register the custom element
      const appElement = createCustomElement(AppComponent, { injector });
      
      // Check if element is already defined to avoid errors
      if (!customElements.get('planner-reservation')) {
        customElements.define('planner-reservation', appElement);
      }
      
      console.log('Custom element successfully registered');
    })
    .catch(err => console.error('Error creating application:', err));
}