import { Injectable, Input, signal } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidebarserviceService {

  private _sqlMenuOpen = signal(false);
  //new
  private sidenavInstance: MatSidenav | null = null;
  //
  constructor() { }
 //new start
  registerSidenav(sidenav: MatSidenav) {
    this.sidenavInstance = sidenav;
  }

  toggleSqlMenu() {
    this._sqlMenuOpen.update(state => {
      const newState = !state;
      this.syncSidenavState(newState);
      return newState;
    });
  }
  closeSqlMenu() {
    this._sqlMenuOpen.set(false);
    this.syncSidenavState(false);
  }

  openSqlMenu() {
    this._sqlMenuOpen.set(true);
    this.syncSidenavState(true);
  }

  private syncSidenavState(shouldOpen: boolean) {
    if (this.sidenavInstance) {
      if (shouldOpen) {
        this.sidenavInstance.open();
      } else {
        this.sidenavInstance.close();
      }
    }
  }
  //end

  get sqlMenuOpen() {
    return this._sqlMenuOpen.asReadonly();
  }

  // toggleSqlMenu() {
  //   this._sqlMenuOpen.update(state => !state);    
  // }

  // closeSqlMenu() {
  //   this._sqlMenuOpen.set(false);
  // }
  // // This is used to open the SQL menu from the SQL editor
  // openSqlMenu() {
  //   this._sqlMenuOpen.set(true);
  // }
  private _sqlMenuOpen2 = signal(false);
}
