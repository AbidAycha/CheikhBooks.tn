import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

import { CONSTANTS } from '../../Config/constants.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggingIn = new BehaviorSubject<boolean>(false);
  loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggingIn() {
    return this.loggingIn.asObservable();
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private http: HttpClient) { }

  login(user: any) {
    const link = CONSTANTS.apis.auth.login;
    return this.http.post<any>(link, user)
      .pipe(map(response => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
          // nkharej l role m token
          this.setUserRole();
          this.loggingIn.next(false);
          this.loggedIn.next(true);
        }
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
    this.loggedIn.next(false);
  }
}
