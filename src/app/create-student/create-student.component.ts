import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentCardService } from '../student-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  constructor(private _studentcardService:StudentCardService, private _router:Router){}

    public studentcardForm:FormGroup= new FormGroup({
      name:new FormControl(),
      dob:new FormControl(),
      email:new FormControl(),
      phone:new FormControl(),
      city:new FormControl(),
      profile_picture:new FormControl(),
      school_city:new FormControl(),
      school_name:new FormControl(),
      school_pin:new FormControl(),

    })


    submit(){
      console.log(this.studentcardForm.value);
      this._studentcardService.createstudentcard(this.studentcardForm.value).subscribe(
        (data:any)=>{
        console.log(data);
        alert("StudentCard created Successfully")
        this._router.navigateByUrl('/dashboard/vehicles')
      },(err:any)=>{
        alert("internal server error")
      })
    }
}




