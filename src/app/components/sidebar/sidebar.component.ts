import { Component, inject } from '@angular/core';
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
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { SidebarserviceService } from '../../services/sidebarservice.service';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, 
    MatSidenavModule,
     MatListModule, 
     RouterModule,      
     MatTooltipModule,   
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
export class SidebarComponent {private sidebarService = inject(SidebarserviceService);
  
  get sqlMenuOpen():boolean {
    return this.sidebarService.sqlMenuOpen();
  }

}

 