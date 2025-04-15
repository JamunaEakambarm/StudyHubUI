import { Component, effect, HostListener, Input, Optional } from '@angular/core';
import { SidebarserviceService } from '../../services/sidebarservice.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  @Input() @Optional() sidenav!: MatSidenav; // Accept the mat-sidenav instance
  
  private sidebarService = inject(SidebarserviceService);
  
 
  // sqlMenuOpenEffect = effect(() => {
  //   console.log('SQL Menu state changed:', this.sidebarService.sqlMenuOpen());    
  // });

  constructor(private ss: SidebarserviceService) { 

     // Register the sidenav instance when component initializes
     effect(() => {
      if (this.sidenav) {
        this.sidebarService.registerSidenav(this.sidenav);
      }
    });
  }
  
  get sqlMenuOpen() {
    return this.ss.sqlMenuOpen();
  }

  toggleSqlMenu() {
    
    this.ss.toggleSqlMenu();


  }
  // This is used to close the SQL menu from the SQL editor
  closeSqlMenu() {
    this.ss.closeSqlMenu();
    
  }
  openSqlMenu() {
    this.ss.openSqlMenu();
    
  }

}
