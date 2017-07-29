import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'connections', component: ConnectionsComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
