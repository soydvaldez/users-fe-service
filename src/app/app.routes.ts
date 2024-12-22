import { Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'admin/users', pathMatch: 'full' },
  { path: 'admin/users', component: UserComponent },
];
