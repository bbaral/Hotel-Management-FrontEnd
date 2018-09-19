import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../service/login.service';
// import {LoginService} from '../../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private loggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.loggedIn = !this.loggedIn;
  }

  logout() {
    this.loginService.logout();
  }

  ngOnDestroy() {
    this.loginService.logout();
  }

}
