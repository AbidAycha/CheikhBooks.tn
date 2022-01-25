import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTS } from 'src/Config/constants.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Object> {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYXRoYS5zaWFsYUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDMxMDg2OTgsImV4cCI6MTY0MzExMjI5OH0.z-hGz6-6INh7Ed-IReKJUGROQN_7JkDPd88Gxv7UsPI";
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.get(CONSTANTS.apis.users.getUsers, {
      headers
    });
  }

  getUser(): Observable<Object> {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYXRoYS5zaWFsYUBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NDMxMTQzMzgsImV4cCI6MTY0MzExNzkzOH0.b04-5qve2gdiKbTg_gFVNUWM37lb8JZg53gFQro1bz8";
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.get(CONSTANTS.apis.users.getUser, {
      headers
    });
  }

}
