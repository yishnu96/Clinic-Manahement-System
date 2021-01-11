import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  clinic = [
    { 'name': 'Ashish Mehra' , 'speciality': 'ENT', 'inTime' :  '9:00' , 'outTime': '11:00', 'cost' : '900'},
    { 'name': 'Rahul Yadab' , 'speciality': 'General', 'inTime' :  '11:30' , 'outTime': '12:30', 'cost' : '500'},
    { 'name': 'Abishek Mukherjee' , 'speciality': 'Dentist ', 'inTime' :  '11:00' , 'outTime': '15:00', 'cost' : '350'},
    { 'name': 'Samujjala Deb Chatterjee' , 'speciality': 'Dermatologist ', 'inTime' :  '11:00' , 'outTime': '15:00', 'cost' : '350'},
    { 'name': 'Vinita Tulsyan' , 'speciality': 'Gynecologist/obstetrician ', 'inTime' :  '11:00' , 'outTime': '15:00', 'cost' : '800'}
  ];

  time = [
    { 1 : [{time : '9:00' , available : 'true'},
            {time : '9:20' , available : 'true'},
            {time : '9:40' , available : 'true'},
            {time : '10:00' , available : 'true'},
            {time : '10:20' , available : 'true'},
            {time : '10:40' , available : 'true'},
            {time : '11:00' , available : 'true'}]
    },
    {2 : [ {time : '11:30' , available : 'true'},
    {time : '11:50' , available : 'true'},
    {time : '12:10' , available : 'true'},
    {time : '12:30' , available : 'true'},
   ]}
  ];

  Ashish: any[] = [];

  constructor() { }

  addAppointment(id,obj){
    this.Ashish.push(obj);
  }

}
