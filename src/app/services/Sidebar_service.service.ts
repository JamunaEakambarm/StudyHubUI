import { Injectable, Input, signal } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class Sidebar_service {

  private _sqlMenuOpen = signal(false);
  //typescript
  private _typescriptOpen=signal(false);
  //
  // ✅ Track which menu is active
  private _activeMenu = signal<'sql' | 'typescript' | null>(null);
  //new
  private sidenavInstance: MatSidenav | null = null;
  //
  constructor() { }
 //new start
  registerSidenav(sidenav: MatSidenav) {
    this.sidenavInstance = sidenav;
  }

   // ✅ Active menu controls
  setActiveMenu(menu: 'sql' | 'typescript' | null) {
    this._activeMenu.set(menu);
  }
  get activeMenu() {
    return this._activeMenu.asReadonly();
  }

  toggleSqlMenu() {
    this._sqlMenuOpen.update(state => {
      const newState = !state;
      if (newState) {
        this.setActiveMenu('sql');
        this._typescriptOpen.set(false);
      } else {
        this.setActiveMenu(null);
      }
      this.syncSidenavState(newState);
      return newState;
    });
  }

  toggleTypeScriptMenu() {
    this._typescriptOpen.update(state => {
      const newState = !state;
      if (newState) {
        this.setActiveMenu('typescript');
        this._sqlMenuOpen.set(false);
      } else {
        this.setActiveMenu(null);
      }
      this.syncSidenavState(newState);
      return newState;
    });
  }

  closeSqlMenu() {
    this._sqlMenuOpen.set(false);
    if (this._activeMenu() === 'sql') this.setActiveMenu(null);
    this.syncSidenavState(false);
  }

  closeTypeScriptMenu() {
    this._typescriptOpen.set(false);
    if (this._activeMenu() === 'typescript') this.setActiveMenu(null);
    this.syncSidenavState(false);
  }

  openSqlMenu() {
    this._sqlMenuOpen.set(true);
    this._typescriptOpen.set(false);
    this.setActiveMenu('sql');
    this.syncSidenavState(true);
  }

  openTypeScriptMenu() {
    this._typescriptOpen.set(true);
    this._sqlMenuOpen.set(false);
    this.setActiveMenu('typescript');
    this.syncSidenavState(true);
  }

  private syncSidenavState(shouldOpen: boolean) {
    if (this.sidenavInstance) {
      shouldOpen ? this.sidenavInstance.open() : this.sidenavInstance.close();
    }
  }

  get typescriptMenuOpen() {
    return this._typescriptOpen.asReadonly();
  }

  get sqlMenuOpen() {
    return this._sqlMenuOpen.asReadonly();
  }

  //private _sqlMenuOpen2 = signal(false);
  
}
