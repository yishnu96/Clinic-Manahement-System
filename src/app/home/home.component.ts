import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  doctors: { name: string; speciality: string; inTime: string; outTime: string; cost: string; }[];


  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    console.log(this.dataService.clinic);
    this.doctors = this.dataService.clinic['1'];
  }

}
