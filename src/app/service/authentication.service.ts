import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private router: Router, private http: HttpClient) { }

  loginCredential(username: string, password: string) {
    const url = 'http://localhost:8080/token';
    const encoderCredentials = btoa(username+ ":" + password);
    const basicHeader = 'Basic ' + encoderCredentials;
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : basicHeader
    });
    return this.http.get(url, {headers: headers});
  }

  logout() {
    const url = 'http://localhost:8080/user/logout';
    const headers = new HttpHeaders({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers : headers});
  }
}
