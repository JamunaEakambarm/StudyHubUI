import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient,withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {providers: 
  [
    provideHttpClient(withInterceptorsFromDi()),
     provideAnimationsAsync(),
     provideRouter(routes)
      ,
      ...appConfig.providers
     ] })
  .catch((err) => console.error(err));

