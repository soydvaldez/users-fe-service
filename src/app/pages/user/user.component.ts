import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserResponseDTO, UserService } from '../services/user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-user',
  imports: [NavbarComponent, SidebarComponent, UserTableComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {}
