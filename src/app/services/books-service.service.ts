import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CONSTANTS } from '../../Config/constants.config';
import { BookDto } from '../DTO/book.dto'; 
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class BooksServiceService {
  private url = `http://localhost:3000/books`;
  categoriesList = [
    'Novel',
    'Science',
    'History',
    'Biography',
    'Adventure',
    'Fantasy',
  ];
  listOfSelectedFilters: string;
  constructor(private http: HttpClient, private router: Router) {
    this.listOfSelectedFilters = '';
  }

  getBooks(): Observable<Object> {
    let params = new HttpParams();
    return this.http.get(CONSTANTS.apis.books.getBooksByCategory);
  }
  getBookById(id: number): Observable<BookDto> {
      const urlById = `${this.url}/${id}`;
      return this.http.get<BookDto>(urlById);
  } 
  getBooksByCategory(categoryId: string): Observable<Object> {
    let params = new HttpParams();
    params = params.append('genre', categoryId);
    return this.http.get(CONSTANTS.apis.books.getBooksByCategory, {
      params: params,
    });
  }
  searchBookByTitleOrAuthor(search: string): Observable<Object> {
    console.log("heeeey",search)
    let queryParams = new HttpParams();
    queryParams = queryParams.append('name', search);
    return this.http.get(CONSTANTS.apis.books.searchBookByTitleOrAuthor, {
      params: queryParams,
    });
  }

  filterBooks(filters: Object,search:string): Observable<Object> {
    this.listOfSelectedFilters = '';
    for (const [key, value] of Object.entries(filters)) {
      if (value == true) {
        this.listOfSelectedFilters = this.listOfSelectedFilters + ',' + key;
      }
    }
    let queryParams = new HttpParams();
    queryParams = queryParams.append('genre', this.listOfSelectedFilters.substring(1));
    queryParams = queryParams.append('name', search);
    return this.http.get(CONSTANTS.apis.books.searchBookByTitleOrAuthor, {
      params: queryParams,
    });
  }
  viewBookDetails(book: BookDto) {
    this.router.navigate(['/books', book.id], {
      queryParams: {
        Name: book.title
      }
    })
  }
  /**pushToCart(productId: number, quantity: number) {
    if (this.authService.cartItem) {
      this.insertToCart(productId, this.authService.cartItem.id, quantity)
        .subscribe(res => {
          this.router.navigate(['/cart'],
            {
              queryParams: {
                Updated: true
              }
            })
        })
    }
  }
**/
}
