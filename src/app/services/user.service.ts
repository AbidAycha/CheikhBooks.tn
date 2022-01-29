import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTS } from 'src/Config/constants.config';
import { UserDTO } from '../DTO/user.dto';

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
  editUser(user: UserDTO): Observable<Object> {
    return this.http.patch(CONSTANTS.apis.users.editUser + "/" + user.id, user);
  }
  deleteUser(id: number): Observable<Object> {
    return this.http.delete(CONSTANTS.apis.users.deleteUser + "/" + id);
  }
  registerUser(userdetails: FormData): Observable<Object> {
    return this.http.post(CONSTANTS.apis.auth.register, userdetails);
  }

  /*validateEmail(email: string): Observable<Object> {
    return this.http.get(CONSTANTS.apis.users.validateEmail+email);
  }*/

}