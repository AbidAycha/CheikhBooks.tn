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
<<<<<<< HEAD
    private activatedRoute: ActivatedRoute,
    private bookService: BooksServiceService
  ) {}
=======
    private activatedRoute: ActivatedRoute
  ) {
    this.listOfBooksByCategory = [];
  }
>>>>>>> 9a17baf712cf835530b1ca4944cb05355ecc469c
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
