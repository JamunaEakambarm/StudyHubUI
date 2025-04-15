import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { routes } from './app.routes';
import { MyInterceptor } from './interceptors/my.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
    ]
};
