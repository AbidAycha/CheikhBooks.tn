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
  constructor(private http: HttpClient) {}

  getBooksByCategory(categoryId: string): Observable<Object> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('genre', categoryId);
    return this.http.get(CONSTANTS.apis.getBooksByCategory, {
      params: queryParams,
    });
  }
}
