import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminCreateProductsComponent } from './components/admin-create-products/admin-create-products.component';
import { AdminUpdateProductsComponent } from './components/admin-update-products/admin-update-products.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AdminViewUsersComponent } from './components/admin-view-users/admin-view-users.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin/create-products', component: AdminCreateProductsComponent },
  { path: 'admin/update-products', component: AdminUpdateProductsComponent },
  { path: 'admin/view-users', component: AdminViewUsersComponent },
  { path: 'settings', component: ChangePasswordComponent },
  { path: '**', component: NotFoundComponent },
];
