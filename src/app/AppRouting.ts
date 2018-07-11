import {NgModule} from '@angular/core';
import {DriverComponent} from './driver.component';
import {FindHotelComponent} from './find-hotel/find-hotel.component';
import {YourReservationComponent} from './your-reservation/your-reservation.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';


const routes = [
  {path: '', component: DriverComponent},
  {path: 'find-hotel', component: FindHotelComponent},
  {path: 'your-reservation', component: YourReservationComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting {}
