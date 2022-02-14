import { Component, OnInit } from '@angular/core';
import { BookDto } from 'src/app/DTO/book.dto';
import { BooksServiceService } from 'src/app/services/books-service.service';
import {ActivatedRoute,ParamMap} from "@angular/router";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: BookDto;
  isLoggedIn: boolean = false;
  constructor(private route: ActivatedRoute,
              public bookService: BooksServiceService,
              public authService: AuthenticationService,
              private cartService : CartService,
              ) {
    route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('bookId')) {
        this.bookService.getBookById(+params.get('bookId')!)
          .subscribe(resBook => {
            this.book = resBook;
          })
      }
    })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  ngOnInit(): void {
    console.log(localStorage.getItem('authToken'))
    if (localStorage.getItem('authToken') !== null)
      this.isLoggedIn = true;
    
  }
 

  func (book: BookDto) {
    if(this.action == 'Add to Cart') {
      //this.status = book.id;
      this.action = 'Cancel';
      this.addtocart(book);
      } else {
      this.action = 'Add to Cart';
      this.removeItem(book);    
    }
  }
  action: string = 'Add to Cart';

  onClick(book: BookDto) {
    if(this.action == 'Add to Cart') {
      this.action = 'Cancel';
      this.addtocart(book);
      } else {
      this.action = 'Add to Cart';
      this.removeItem(book);    
    }
  }

}
