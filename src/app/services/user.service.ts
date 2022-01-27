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
    let token = localStorage.getItem('authToken');
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.get(CONSTANTS.apis.users.getUsers, {
      headers
    });
  }

  getUser(): Observable<Object> {
    let token = localStorage.getItem('authToken');
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.get(CONSTANTS.apis.users.getUser, {
      headers
    });
  }
  editUser(user: UserDTO): Observable<Object> {
    let token = localStorage.getItem('authToken');
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.patch(CONSTANTS.apis.users.editUser + "/" + user.id, user, {
      headers
    });
  }
  deleteUser(id: number): Observable<Object> {
    let token = localStorage.getItem('authToken');
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.delete(CONSTANTS.apis.users.deleteUser + "/" + id, {
      headers
    });
  }

}