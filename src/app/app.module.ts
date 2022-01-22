import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardBookComponent } from './books-page/card-book/card-book.component';
import { CategoryPageComponent } from './books-page/category-page/category-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SliderComponent } from './home/slider/slider.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { AboutOurBookmarkComponent } from './home/about-our-bookmark/about-our-bookmark.component';
import { ClientSectionComponent } from './home/client-section/client-section.component';
import { OurBlogComponent } from './home/our-blog/our-blog.component';
import { ContactSectionComponent } from './home/contact-section/contact-section.component';
import { InfoSectionComponent } from './home/info-section/info-section.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CategoryFooterUtilityComponent } from './books-page/category-footer-utility/category-footer-utility.component';
import { ResultSearchPageComponent } from './books-page/result-search-page/result-search-page.component';
import { SearchResultSidebarComponent } from './books-page/search-result-sidebar/search-result-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    CardBookComponent,
    CategoryPageComponent,
    NavBarComponent,
    HomeComponent,
    PageNotFoundComponent,
    SliderComponent,
    CategoriesComponent,
    AboutOurBookmarkComponent,
    ClientSectionComponent,
    OurBlogComponent,
    ContactSectionComponent,
    InfoSectionComponent,
    FooterComponent,
    CategoryFooterUtilityComponent,
    ResultSearchPageComponent,
    SearchResultSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    GoogleMapsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
