import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksServiceService } from '../Services/books-service.service';

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
  constructor(
    private router: Router,
    private booksService: BooksServiceService
  ) {
    this.listOfCategories = this.booksService.categoriesList;
  }

  ngOnInit(): void {}

  onchange() {
    this.expanded = !this.expanded;
  }
  navigateSearch(): void {
    this.router.navigate(['search/result']);
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
}
