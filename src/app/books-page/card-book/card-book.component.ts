import { Component, Input, OnInit } from '@angular/core';
import { BookDto } from 'src/app/DTO/book.dto';
import { BooksServiceService } from 'src/app/services/books-service.service';
@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrls: ['./card-book.component.css'],
})
export class CardBookComponent implements OnInit {
  isHover: Boolean;
  @Input() index: number;
  @Input() expanded: boolean;
  @Input() book: BookDto;
  @Input() bookHeight:number;
  constructor(private bookService: BooksServiceService) {
    this.isHover = false;
    this.index = 0;
    this.expanded = false;
    this.book = new BookDto();
    this.bookHeight=0;
    
  }

  ngOnInit(): void {}
  mouseLeaveAction(): void {
    this.isHover = false;
  }
  mouseEnterAction(): void {
    this.isHover = true;
  }

  viewBookDetails(book: BookDto) {
    this.bookService.viewBookDetails(book);
  }
}
