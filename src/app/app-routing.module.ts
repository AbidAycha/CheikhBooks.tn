import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './books-page/category-page/category-page.component';
import { ResultSearchPageComponent } from './books-page/result-search-page/result-search-page.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserTableComponent } from './admin/user-table/user-table.component';
import { BookTableComponent } from './admin/book-table/book-table.component';
import { OrderTableComponent } from './admin/order-table/order-table.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    // component: HomeComponent
    children: [
      { path: 'users', component: UserTableComponent },
      { path: 'books', component: BookTableComponent },
      { path: 'orders', component: OrderTableComponent },
    ],
    canLoad: [AdminAuthGuard],
    canActivate: [AdminAuthGuard]
  },
  { path: 'category/:chosenCategory', component: CategoryPageComponent },
  { path: 'search/result', component: ResultSearchPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'not-found', component: PageNotFoundComponent },

  { path: 'user/login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile/edit', component: ProfileEditComponent, canActivate: [AuthGuard] },
  { path: 'not-found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
