import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPageComponent } from './books-page/category-page/category-page.component';
import { ResultSearchPageComponent } from './books-page/result-search-page/result-search-page.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserTableComponent } from './admin/user-table/user-table.component';
import { BookTableComponent } from './admin/book-table/book-table.component';
import { OrderTableComponent } from './admin/order-table/order-table.component';

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
  },
  { path: 'category/:chosenCategory', component: CategoryPageComponent },
  { path: 'search/result', component: ResultSearchPageComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'not-found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
