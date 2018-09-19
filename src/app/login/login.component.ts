import {Component, OnDestroy, OnInit} from '@angular/core';
// import {LoginService} from '../service/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../service/login.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
   private loggedIn = false;
   private logginPass: Subscription;
  private credential = {'username': '', 'password' : ''};

  constructor(private loginService: LoginService) { }

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
      this.loggedIn = true;
    }, error => {
        console.log(error);
      });
  }

  ngOnDestroy() {
    this.logginPass.unsubscribe();
  }

}
