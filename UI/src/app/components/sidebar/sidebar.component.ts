import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TopbarComponent } from '../topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, 
    MatSidenavModule,
     MatListModule, 
     RouterModule,        
    CommonModule,    
   MatSidenavModule,
   MatToolbarModule,
   MatButtonModule,
   MatSidenavModule, 
   MatIconModule,
    MatListModule,
  MatExpansionModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent { }

 