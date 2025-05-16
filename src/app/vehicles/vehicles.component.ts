import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any=[];
  constructor(private _vehicleService:VehiclesService){
    this.loadVehicles();
    // _vehicleService.getVehicles().subscribe((data:any)=>{
    //   console.log(data);
    //   this.vehicles=data;
    //   console.log(this.vehicles);
    // },(err:any)=>{
    //   alert("Internal Sever Error!")
    // }
    // )
  }
  loadVehicles(){
    this._vehicleService.getVehicles().subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data;
      console.log(this.vehicles);
    },(err:any)=>{
      alert("Internal Sever Error!")
    }
    )
  }
  

  keywords:any='';
  search(){
    this._vehicleService.filteredVehicles(this.keywords).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data
      }
    )
  }

  column:any='';
  order:any='';
  sort(){
    this._vehicleService.sortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

  // pagination
  limit:number=0;
  page:number=0;
  pagination(){
    this._vehicleService.paginatedVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data;
      },(err:any)=>{
        alert("internal server error!")
      }
    )
  }

  delete(id:number){
    if(confirm("Are you sure to delete?")==true){
      this._vehicleService.deleteVehicles(id).subscribe(
        (data:any)=>{
          alert("Record deleted successfully!");
          this.loadVehicles();
        },(err:any)=>{
          alert("Internal Serever Error!");
        }
      )  
    }else{
      alert("You have cancelled delete")
    }
    
  }
 
}
