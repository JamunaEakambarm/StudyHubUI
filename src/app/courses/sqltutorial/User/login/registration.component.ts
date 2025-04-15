import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationLoginService } from '../../../../services/registration-login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registerForm: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private regService: RegistrationLoginService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  navigateTo(path: string | null) {
    if (path) this.router.navigate([path]);
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;

      this.regService.register(email, password).subscribe({
        next: () => {
          this.message = 'Registration successful! Redirecting...';
          setTimeout(() => this.router.navigate(['/login']), 1500);
        },
        error: () => {
          this.message = 'Email is already registered!';
        },
      });

      this.registerForm.reset(); // ✅ Clear form after submission
    }
  }
}
