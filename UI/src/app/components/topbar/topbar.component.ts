import { Component,Input,input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'; // ✅ Import MatIconModule
import { MatListModule } from '@angular/material/list'; // ✅ Import MatListModule
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule], // ✅ Add MatIconModule to the imports array
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent { 
  @Input() sidenav!: MatSidenav;
  constructor(private router: Router) {}
    navigateToRegister() {
      this.router.navigate(['/register']);
    }

}