import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  books: Array<any> = [1,2,3];
  newAttribute: any = {};

  add() {
    this.books.push(this.newAttribute)
    this.newAttribute = {};
  }
  edit(index:number) {

  }
  delete(index:number) {
    this.books.splice(index, 1);
  }

}
