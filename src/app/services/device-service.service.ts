import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceServiceService {
  private _isMobile = signal(window.innerWidth < 768); // Adjust breakpoint as needed
  ismobile=computed(() => this._isMobile());

  constructor() { 
    window.addEventListener('resize', () => {
      this._isMobile.set(window.innerWidth < 768); // Adjust breakpoint as needed
    } );
  }
}
