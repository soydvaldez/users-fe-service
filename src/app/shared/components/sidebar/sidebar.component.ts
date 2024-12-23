import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isSidebarVisible: boolean = false;
  isUserOptionsActive: boolean = false;
  isRoleOptionsActive: boolean = false;
  isDashboardOptionsActive: boolean = false;

  // state sections
  sectionsState = {
    usuarios: false,
    roles: false,
    dashbboard: false,
    reportes: false,
    seguridad: false,
  };

  toggleSidebar() {
    if (!this.isSidebarVisible) {
      this.isUserOptionsActive = this.sectionsState['usuarios'];
      this.isRoleOptionsActive = this.sectionsState['roles'];
      this.isDashboardOptionsActive = this.sectionsState['dashbboard'];
    } else {
      this.isUserOptionsActive = false;
      this.isRoleOptionsActive = false;
      this.isDashboardOptionsActive = false;
    }
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  toggleUsersOptions() {
    this.isUserOptionsActive = !this.isUserOptionsActive;
    this.sectionsState['usuarios'] = this.isUserOptionsActive;
  }

  toggleRolesOptions() {
    this.isRoleOptionsActive = !this.isRoleOptionsActive;
    this.sectionsState['roles'] = this.isRoleOptionsActive;
  }

  toggleDashboardOptions() {
    this.isDashboardOptionsActive = !this.isDashboardOptionsActive;
    this.sectionsState['dashbboard'] = this.isDashboardOptionsActive;
  }
}
