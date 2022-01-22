import { Component, OnInit } from '@angular/core';
import { BooksSearchService } from 'src/app/Services/books.search.service';

@Component({
  selector: 'app-search-result-sidebar',
  templateUrl: './search-result-sidebar.component.html',
  styleUrls: ['./search-result-sidebar.component.css'],
})
export class SearchResultSidebarComponent implements OnInit {
  isExpanded: boolean;
  listOfCategories;
  constructor(private serviceSearchBooks:  BooksSearchService,) {
    this.isExpanded = false;
    this.listOfCategories=serviceSearchBooks.categoriesList;
  }
  ngOnInit(): void {}
}
