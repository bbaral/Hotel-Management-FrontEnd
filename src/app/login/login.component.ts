import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
   private loggedIn = false;
  private credential = {'username': '', 'password' : ''};

  constructor(private loginService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });
  }

  onSubmit() {
    this.loginService.loginCredential(this.credential.username, this.credential.password).subscribe(
      res => {
      console.log(res);
      localStorage.getItem('xAuthToken', res.json().token);
      this.loggedIn = true;
    }, error => {
        console.log(error);
      });
  }

}
