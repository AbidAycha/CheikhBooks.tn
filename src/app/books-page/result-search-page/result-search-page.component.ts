import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
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
  listOfBooks:any;

  constructor(private activatedRoute: ActivatedRoute,private serviceBook:BooksServiceService) {
    this.showButton = true;
    this.showFilters = false;
    this.listOfBooks=[];
  }
  showHideFilters(showFilterStatus: boolean) {
    this.showFilters = showFilterStatus;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.serviceBook
        .searchBookByTitleOrAuthor(params['search'])
        .subscribe((data) => {
          this.listOfBooks = data;
        });


    });
  }
}
