import { inject, Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { RegistrationLoginService } from '../../../../services/registration-login.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: RegistrationLoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']); // ✅ Redirect if not logged in
      return false;
    }
  }
}