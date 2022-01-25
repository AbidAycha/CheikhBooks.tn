import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookDto } from 'src/app/DTO/book.dto';
import { BooksServiceService } from 'src/app/Services/books-service.service';

@Component({
  selector: 'app-result-search-page',
  templateUrl: './result-search-page.component.html',
  styleUrls: ['./result-search-page.component.css'],
})
export class ResultSearchPageComponent implements OnInit {
  showButton: boolean;
  showFilters: boolean;
  listOfBooks: any;
  search: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceBook: BooksServiceService
  ) {
    this.showButton = true;
    this.showFilters = false;
    this.listOfBooks = [];
    this.search = '';
  }
  showHideFilters(showFilterStatus: boolean) {
    this.showFilters = showFilterStatus;
  }
  applyRemoveFilter(filteredData: any) {
    this.listOfBooks = filteredData;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.search = params['search'];
      this.serviceBook
        .searchBookByTitleOrAuthor(params['search'])
        .subscribe((data) => {
          this.listOfBooks = data;
        });
    });
  }
}
