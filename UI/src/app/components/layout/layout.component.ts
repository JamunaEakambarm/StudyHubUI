import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent,SidebarComponent,
    RouterOutlet,
    
    CommonModule,    
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule, MatIconModule, MatListModule],    
    
  templateUrl: './layout.component.html'
    
  ,
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  constructor(private router: Router) {}
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}
