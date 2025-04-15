import { Injectable, Signal, signal } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationLoginService {
  private apiUrl = `${environment.apiUrl}/UserLoginManagement`;
  //private apiUrl = 'https://localhost:7273/api/UserLoginManagement';
  private users: { email: string; password: string }[] = [];
  private emailCount = new BehaviorSubject<number>(0);
  private isAuthenticated = signal<boolean>(false);
  private userEmail=signal<string>('');

  constructor(private http: HttpClient, private router: Router) {}
  // Register a new user
  register(email: string, password: string): Observable<any> {
    console.log('register() called with:', email, password);
    // Check if the user already exists locally
    if (this.users.find(user => user.email === email)) {
      console.log('User already exists locally');
      return of({ success: false, message: 'Email already registered' });
    }
 // Add the user locally
    this.users.push({ email, password });
    this.emailCount.next(this.users.length);
    // Send the registration request to the API
    const requestBody = { email, password };
    return this.http.post(`${this.apiUrl}/register`, requestBody);
  }
  // Login an existing user

  login(email: string, password: string): Observable<any> {
    console.log('login() called with:', email, password);
  
    const requestBody = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post(`${this.apiUrl}/login`, requestBody, { headers }).pipe(
      map((response: any) => {
        console.log('API Response:', response);
  
        // Check if the response contains a success message
        if (response.message === 'Login successful') {
          console.log('Login successful (API response)');
          this.isAuthenticated.set(true);
          localStorage.setItem('token', 'aVz6XqaQ1RjnmYzPbFsd8XqL1aE+8Gp80HqJbQWvztZgNj9AklBpeV3W0Ahnw9PO'); // Replace with actual token if API provides one
          return { success: true, message: 'Login successful' };
        } else {
          console.log('Login failed (API response)');
          return { success: false, message: response.message || 'Invalid email or password' };
        }
      }),
      catchError((error) => {
        console.error('Error during login:', error);
        return of({ success: false, message: 'Error occurred during login' });
      })
    );
  }
  getEmailCount(): Observable<number> {
    return this.emailCount.asObservable();
  }
//log out the user
  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }
  //Check if the user is logged in

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Get the current authentication status as a signal
  getIsAuthenticated() {
    return this.isAuthenticated.asReadonly();
  }

  // Get the current user's email as a signal
  getUserEmail() {
    return this.userEmail.asReadonly();
  }

}