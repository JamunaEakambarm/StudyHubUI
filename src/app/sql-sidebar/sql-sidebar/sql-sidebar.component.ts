import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sql-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './sql-sidebar.component.html',
  styleUrls: ['./sql-sidebar.component.css']
})
export class SqlSidebarComponent {}