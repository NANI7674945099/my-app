import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private _router:Router){}

  logout(){
    if(confirm("are you sure to logout?")==true){
      sessionStorage.removeItem('token');
    this._router.navigateByUrl("/");
    }else{
      alert("cancelled Logout")
    }
  }
  

}
