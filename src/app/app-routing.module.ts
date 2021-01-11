import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';

const routes: Routes = [
  { path : 'bookAppointment' , component : BookAppointmentComponent},
  { path : 'appointment' , component : AppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
