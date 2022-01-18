import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
