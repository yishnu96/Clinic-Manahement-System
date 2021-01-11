import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  clinic = [
    { 'doctor': 'Ashish Mehra' , 'speciality': 'ENT', 'inTime' :  '9:00' , 'outTime': '12:00', 'cost' : '300'},
    { 'doctor': 'Rahul Yadab' , 'speciality': 'General', 'inTime' :  '11:00' , 'outTime': '15:00', 'cost' : '200'}
  ]

  constructor() { }

}
