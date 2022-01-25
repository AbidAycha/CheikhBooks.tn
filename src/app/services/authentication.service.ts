import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient) { }

  login(user: any) {
    const link = 'localhost:3000/login';
    return this.http.post<any>(link, user)
      .pipe(map(response => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
          // nkharej l role m token
          this.setUserRole();
          const role ='user';
          localStorage.setItem('role', role);        }
        return response;
      }));
  }

  setUserRole() {
    if (localStorage.getItem('authToken')) {
      const decodeUserDetails = JSON.parse(atob(localStorage.getItem('authToken')!.split('.')[1]));
      
      localStorage.setItem('role', decodeUserDetails.role);
    }
  }
  
  logout() {
    localStorage.clear();
  }
}
