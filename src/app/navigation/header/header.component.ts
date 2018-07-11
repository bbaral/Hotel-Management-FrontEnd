import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private loggedIn = false;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  toggleDisplay() {
    this.loggedIn = !this.loggedIn;
  }

  logout() {
    this.authService.logout();
  }

}
