import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
// import { EmployeeComponent } from "./components/employee/employee.component";
import { HttpClient, provideHttpClient } from '@angular/common/http';

//import { LayoutComponent } from "./components/layout/layout.component";
import { CommonModule } from '@angular/common';
//

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Mark it as a standalone component
  imports: [CommonModule,RouterModule],  
  templateUrl:'./app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'Study Hub';
}
