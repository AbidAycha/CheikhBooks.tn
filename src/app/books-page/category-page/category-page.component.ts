import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksServiceService } from 'src/app/services/books-service.service';
import { BookDto } from 'src/app/DTO/book.dto';
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
})
export class CategoryPageComponent implements OnInit {
  listOfBooksByCategory: any;
  constructor(
    private bookCategoryService: BooksServiceService,
    private activatedRoute: ActivatedRoute,
    private bookService: BooksServiceService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.bookCategoryService
        .getBooksByCategory(params['chosenCategory'])
        .subscribe((data) => {
          this.listOfBooksByCategory = data;
        });
    });
  }
  viewBookDetails(book: BookDto) {
    this.bookService.viewBookDetails(book);
  }
}
