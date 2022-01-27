import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { BooksServiceService } from '../services/books-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  expanded = false;

  colorhome = '#44b89d';
  colorsell = 'white';
  colorcategories = 'white';
  colorbasket = 'white';
  coloruser = 'white';
  listOfCategories: Array<String>;

  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private booksService: BooksServiceService,
    private authenticationService: AuthenticationService
  ) {
    this.listOfCategories = this.booksService.categoriesList;
  }

  ngOnInit(): void {
    console.log(localStorage.getItem('authToken'))
    if (localStorage.getItem('authToken') !== null)
      this.isLoggedIn = true;
  }

  onchange() {
    this.expanded = !this.expanded;
  }
  searchBook(searchForm: NgForm): void {
    this.router.navigate(['search/result/'], {
      queryParams: { search: searchForm.value.search },
    });
  }

  changeColorhome() {
    this.colorhome = '#44b89d';
    this.colorsell = 'white';
    this.colorcategories = 'white';
    this.colorbasket = 'white';
    this.coloruser = 'white';
  }
  changeColorsell() {
    this.colorhome = 'white';
    this.colorsell = '#44b89d';
    this.colorcategories = 'white';
    this.colorbasket = 'white';
    this.coloruser = 'white';
  }

  changeColorcategories() {
    this.colorhome = 'white';
    this.colorsell = 'white';
    this.colorcategories = '#44b89d';
    this.colorbasket = 'white';
    this.coloruser = 'white';
  }
  changeColorbasket() {
    this.colorhome = '#white';
    this.colorsell = 'white';
    this.colorcategories = 'white';
    this.colorbasket = '#44b89d';
    this.coloruser = 'white';
  }
  changeColoruser() {
    this.colorhome = 'white';
    this.colorsell = 'white';
    this.colorcategories = 'white';
    this.colorbasket = 'white';
    this.coloruser = '#44b89d';
  }
  isLoggingIn() {
    this.authenticationService.loggingIn.next(true);
  }

  logout() {
    this.authenticationService.logout();
  }
}
