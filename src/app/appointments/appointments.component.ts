import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  Patients: any[];

  constructor(private data : DataService) { }

  ngOnInit(): void {
    console.log(this.data.Ashish);
    this.Patients = this.data.Ashish;
  }

}
