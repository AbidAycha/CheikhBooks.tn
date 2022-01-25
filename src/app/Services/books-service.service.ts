import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CONSTANTS } from '../../Config/constants.config';
import { BookDto } from '../DTO/book.dto';
@Injectable({
  providedIn: 'root',
})
export class BooksServiceService {
  categoriesList = [
    'Novel',
    'Science',
    'History',
    'Biography',
    'Adventure',
    'Fantasy',
  ];
  listOfSelectedFilters: string;
  constructor(private http: HttpClient) {
    this.listOfSelectedFilters = '';
  }

  getBooksByCategory(categoryId: string): Observable<Object> {
    let params = new HttpParams();
    params = params.append('genre', categoryId);
    return this.http.get(CONSTANTS.apis.books.getBooksByCategory, {
      params: params,
    });
  }
  searchBookByTitleOrAuthor(search: string): Observable<Object> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('name', search);
    return this.http.get(CONSTANTS.apis.books.searchBookByTitleOrAuthor, {
      params: queryParams,
    });
  }

  filterBooks(filters: Object): Observable<Object> {
    this.listOfSelectedFilters = '';
    for (const [key, value] of Object.entries(filters)) {
      if (value == true) {
        this.listOfSelectedFilters = this.listOfSelectedFilters + ',' + key;
      }
    }
    let queryParams = new HttpParams();
    queryParams = queryParams.append('genre', this.listOfSelectedFilters);
    return this.http.get(CONSTANTS.apis.books.searchBookByTitleOrAuthor, {
      params: queryParams,
    });
  }
}