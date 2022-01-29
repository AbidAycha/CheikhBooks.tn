import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTS } from 'src/Config/constants.config';
import { User } from '../DTO/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Object> {
    return this.http.get(CONSTANTS.apis.users.getUsers);
  }

  getUser(): Observable<Object> {
    return this.http.get(CONSTANTS.apis.users.getUser);
  }
  registerUser(userdetails: FormData): Observable<Object> {
    return this.http.post(CONSTANTS.apis.auth.register, userdetails);
  }

  /*validateEmail(email: string): Observable<Object> {
    return this.http.get(CONSTANTS.apis.users.validateEmail+email);
  }*/

}