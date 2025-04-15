import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router, RouterLink } from '@angular/router';
import { RegistrationLoginService } from '../../services/registration-login.service';


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule ],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent {
  @Input() sidenav!: MatSidenav; // Accept the mat-sidenav instance

  // Inject the RegistrationLoginService and Router
  private authService = inject(RegistrationLoginService);
  private router = inject(Router);

  // Expose the authentication state and user email as signals
  isLoggedIn = this.authService.getIsAuthenticated();
  userEmail = this.authService.getUserEmail();

  // Navigate to the register page
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  // Navigate to the login page
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // Logout the user
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  // Toggle the sidebar
  toggleSidebar() {
    this.sidenav.toggle(); // Call the toggle method on the sidenav instance
  }
}