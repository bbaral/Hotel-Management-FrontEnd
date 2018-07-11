import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router) { }

  logout() {
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }
}
