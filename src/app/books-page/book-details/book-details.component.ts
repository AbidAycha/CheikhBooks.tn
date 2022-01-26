import { Component, OnInit } from '@angular/core';
import { BookDto } from 'src/app/DTO/book.dto';
import { BooksServiceService } from 'src/app/services/books-service.service';
import {ActivatedRoute,ParamMap} from "@angular/router";
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: BookDto;
  constructor(private route: ActivatedRoute,
              public bookService: BooksServiceService) {
    route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('bookId')) {
        this.bookService.getBookById(+params.get('bookId')!)
          .subscribe(resBook => {
            this.book = resBook;
          })
      }
    })
  }

  ngOnInit(): void {
  }

}
