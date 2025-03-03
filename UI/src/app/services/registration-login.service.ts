import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class RegistrationLoginService {
  private apiUrl = 'https://localhost:7273/api/UserLoginManagement';

  constructor(private http: HttpClient) {}

  // In-memory user storage
  private users: { email: string; password: string }[] = [];
  private emailCount = new BehaviorSubject<number>(0);

  // Register a new user (checks local array first, then API call)
  register(email: string, password: string): Observable<any> {
    console.log('register() called with:', email, password);

    // Check if user already exists locally
    if (this.users.find(user => user.email === email)) {
      console.log('User already exists locally');
      return of({ success: false, message: 'Email already registered' });
    }

    // Add user to local storage (temporary)
    this.users.push({ email, password });
    this.emailCount.next(this.users.length);

    // Send registration request to API
    const requestBody = { email, password };
    return this.http.post(`${this.apiUrl}/register`, requestBody);
  }

  // Login method (checks local array)
  login(email: string, password: string): Observable<any> {
    console.log('login() called with:', email, password);

    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      console.log('Login successful (local check)');
      return of({ success: true, message: 'Login successful' });
    } else {
      console.log('Login failed (local check)');
      return of({ success: false, message: 'Invalid email or password' });
    }
  }

  // Get the number of registered emails (local count)
  getEmailCount(): Observable<number> {
    return this.emailCount.asObservable();
  }
}
