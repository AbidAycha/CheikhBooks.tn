import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksServiceService } from 'src/app/Services/books-service.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private serviceBook: BooksServiceService) { }

  ngOnInit(): void {
    this.load()
  }

  books: any = [];
  newAttribute: any = {};

  load() {
    this.serviceBook
      .getBooks()
      .subscribe((data) => {
        this.books = data;
      });
  }

  add() {
    this.books.push(this.newAttribute)
    this.newAttribute = {};
  }
  edit(index: number, book: any) {
    //edit book
    this.books[index] = book;
  }
  delete(index: number, book: any) {
    //delete book
    this.books.splice(index, 1);
  }

}
