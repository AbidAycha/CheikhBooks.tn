import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BookDto } from '../DTO/book.dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public bookList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getBooks(){
    return this.bookList.asObservable();
  }

  setBook(book : any){
    this.cartItemList.push(...book);
    this.bookList.next(book);
  }
  addtoCart(book : any){
    this.cartItemList.push(book);
    this.bookList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  removeCartItem(book: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(book.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.bookList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.bookList.next(this.cartItemList);
  }
  checkoutCart(books: BookDto[]){
    this.cartItemList.map((a:any)=>{
        a.isValid= false;
      }) 
      
  }
}