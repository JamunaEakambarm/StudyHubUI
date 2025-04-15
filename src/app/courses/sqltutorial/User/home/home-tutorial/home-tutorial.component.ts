import { Component, inject } from '@angular/core';
import { RegistrationLoginService } from '../../../../../services/registration-login.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-home-tutorial',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, RouterLink],
  templateUrl: './home-tutorial.component.html',
  styleUrl: './home-tutorial.component.css',
})
export class HomeTutorialComponent {
  // Inject the RegistrationLoginService and Router
  private authService = inject(RegistrationLoginService);
  private router = inject(Router);

  // Reactive state using signals
  isLoggedIn = this.authService.getIsAuthenticated();
  userEmail = this.authService.getUserEmail();

  // Navigate to the login page
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // Navigate to the register page
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  // Logout the user
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}