import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from 'src/app/Services/books-service.service';

@Component({
  selector: 'app-search-result-sidebar',
  templateUrl: './search-result-sidebar.component.html',
  styleUrls: ['./search-result-sidebar.component.css'],
})
export class SearchResultSidebarComponent implements OnInit {
  isExpanded: boolean;
  listOfCategories;
  constructor(private serviceSearchBooks:  BooksServiceService,) {
    this.isExpanded = false;
    this.listOfCategories=serviceSearchBooks.categoriesList;
  }
  ngOnInit(): void {}
}
