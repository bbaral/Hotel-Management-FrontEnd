import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DriverComponent } from './driver.component';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { FindHotelComponent } from './find-hotel/find-hotel.component';
import { YourReservationComponent } from './your-reservation/your-reservation.component';
import { LoginComponent } from './login/login.component';
import {AppRouting} from './AppRouting';
import {AuthenticationService} from './service/authentication.service';

@NgModule({
  declarations: [
    DriverComponent,
    HeaderComponent,
    FindHotelComponent,
    YourReservationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRouting,
    FlexLayoutModule
  ],
  providers: [AuthenticationService],
  bootstrap: [DriverComponent],
  entryComponents: []
})
export class AppModule { }
