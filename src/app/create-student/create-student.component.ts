import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentCardService } from '../student-card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  constructor(private _studentcardService:StudentCardService, private _router:Router,private _activateRoute:ActivatedRoute){
    _activateRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        if(this.id){
          _studentcardService.getstudentscard(data.id).subscribe(
            (data:any)=>{
              console.log(data);
              this.studentcardForm.patchValue(data);
            },(err:any)=>{
              alert("unable to fetch vehicle data")
            }
          )
        }
        // alert("StudentCard created Successfully")
        // this._router.navigateByUrl('/dashboard/vehicles')
      
      
      },(err:any)=>{
        alert("internal server error")
      }
    )
  }

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

    id:any='';
    submit(){
      if(this.id){
        this._studentcardService.updatestudentscard(this.id,this.studentcardForm.value).subscribe(
          (data:any)=>{
          console.log(data);
          alert("StudentCard record updated Successfully");
          this._router.navigateByUrl('/dashboard/create-student')
        },(err:any)=>{
        alert("internal server error")
        })  
      }else{
      console.log(this.studentcardForm.value);
      this._studentcardService.createstudentcard(this.studentcardForm.value).subscribe(
        (data:any)=>{
        console.log(data);
        alert("StudentCard created Successfully")
        this._router.navigateByUrl('/dashboard/create-student')
      },(err:any)=>{
      alert("internal server error")
      })}
    }
}




