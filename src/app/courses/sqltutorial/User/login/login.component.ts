import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationLoginService } from '../../../../services/registration-login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: RegistrationLoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onCancel() {
    this.loginForm.reset(); // ✅ Clear form when canceling
    this.errorMessage = '';
  }

  navigateTo(path: string | null) {
    if (path) this.router.navigate([path]);
  }
  onClose() {
    console.log('Attempting to navigate...');
    console.log('Router:', this.router);
    this.router.navigate(['/home']).then(success => {
      console.log('Navigation success?', success);
    }).catch(err => {
      console.error('Navigation error:', err);
    });
  }
  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: (response) => {
          if (response.success) {
            console.log('Login Successful:', response.message);
            alert('Login successful!');
            this.router.navigate(['/home']); // ✅ Redirect to home after login
          } else {
            this.errorMessage = response.message;
          }
        },
        error: () => {
          this.errorMessage = 'Invalid credentials';
        },
      });
    } else {
      this.errorMessage = 'Please enter a valid email and password.';
    }
  }
}
