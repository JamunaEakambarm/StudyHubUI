import { Component, effect, HostListener, Input, Optional } from '@angular/core';
import { Sidebar_service } from '../../services/Sidebar_service.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  @Input() @Optional() sidenav!: MatSidenav; // Accept the mat-sidenav instance
  
  private sidebarService = inject(Sidebar_service);
  sqlMenuOpen = this.sidebarService.sqlMenuOpen;
  typescriptMenuOpen = this.sidebarService.typescriptMenuOpen;
  
    

  constructor(private ss: Sidebar_service,private router: Router) { 

     // Register the sidenav instance when component initializes
     effect(() => {
      if (this.sidenav) {
        this.sidebarService.registerSidenav(this.sidenav);
      }
    });
  }
  
  // get sqlMenuOpen() {
  //   return this.ss.sqlMenuOpen();
  // }
  // get typescriptMenuOpen()
  // {
  //   return this.ss.typescriptMenuOpen();
  // }
toggleSqlMenu() {
  if (!this.ss.sqlMenuOpen()) {
    this.router.navigate(['/SQL']);
    this.ss.openSqlMenu();
  } else {
    this.ss.closeSqlMenu();
  }
}

toggleTypeScriptMenu() {
  if (!this.ss.typescriptMenuOpen()) {
    this.router.navigate(['/TypeScript']);
    this.ss.openTypeScriptMenu();
  } else {
    this.ss.closeTypeScriptMenu();
  }
}

  // toggleSqlMenu() {    
  //   this.ss.toggleSqlMenu();
  // }

  
  // toggleTypeScriptMenu()
  // {
  //   this.ss.toggleTypeScriptMenu();
  // }
  // This is used to close the SQL menu from the SQL editor
  closeSqlMenu() {
    this.ss.closeSqlMenu();
    
  }
  
  CloseTypeScriptMenu()
  {
    this.ss.closeTypeScriptMenu();
  }

  openSqlMenu() {
    this.ss.openSqlMenu();
    
  }

  openTypeScriptMenu()
  {
    this.ss.openTypeScriptMenu();
  }

}
