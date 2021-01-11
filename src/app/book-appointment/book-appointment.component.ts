import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {
  paitentForm: FormGroup;
  constructor(private data : DataService,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.initCourseForm();
  }

  initCourseForm() {
    this.paitentForm = this.formBuilder.group({
      paitentName: new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern(/[a-zA-Z][a-zA-Z][^#&<>\"~;$^%{}?]/)]),
      paitentAge: new FormControl(""),
      paitentGender: new FormControl(""),
      timeSlot: new FormControl("")
    });
  }

  submit(){
    this.data.addAppointment(1, this.paitentForm.value)
    console.log(this.data.Ashish);

  }

}
