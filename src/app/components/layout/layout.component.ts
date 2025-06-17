import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { MenubarComponent } from "../menu/menubar.component";
import { DeviceServiceService } from '../../services/device-service.service';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterOutlet,
    SidebarComponent,
    TopbarComponent,
    MenubarComponent
    
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  // 👇 Host metadata for better animation performance
  host: {
    '[@.disabled]': 'false',
    '[style.display]': '"block"',
    '[style.position]': '"relative"'
  }
})
export class LayoutComponent {
  private deviceService = inject(DeviceServiceService);

  get isMobile() {
    return this.deviceService.ismobile; 
  }
  planeSpeed = '18s';
  planeSize = '120px';
  private router = inject(Router);
  planeVisible = true;
  ngOnInit() {
    const img = new Image();
    img.src = '/src/assets/images/aircraft.png';
    img.onload = () => console.log('Image loaded');
    img.onerror = () => console.error('Failed to load image');
  }
  get sidenavMode(): MatDrawerMode {
    return this.isMobile()? 'over' : 'side';
  }

  get shouldSidenavOpen(): boolean {
    return !this.isMobile;
  }
  
  // Navigate to the register page
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  // Optional: Change plane on route changes
  onNavigationStart() {
    this.planeSpeed = '12s'; // Faster during navigation
  }


}