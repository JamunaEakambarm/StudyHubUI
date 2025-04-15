import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RegistrationLoginService } from './services/registration-login.service';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Mark it as a standalone component
  imports: [CommonModule, RouterModule, RouterOutlet], // ✅ Add RouterOutlet to the imports array
//  templateUrl:'./app.component.html', 
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'Study Hub';
  // Inject the RegistrationLoginService and Router
  private authService = inject(RegistrationLoginService);
  private router = inject(Router);

  // Expose the authentication state and user email as signals
  isLoggedIn = this.authService.getIsAuthenticated();
  userEmail = this.authService.getUserEmail();

  // Navigate to the login page
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  // Logout the user
  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
  
 
}
