import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  message:string='Good Morning Everyone!';
  isDisabled:boolean=true;
  name:string='Nani'

  mobile:string='+91';
  submit(){
    alert(this.mobile);
  }

  great(){
    alert("Good Morning")
  }

  typing(){
    alert("Typing.........")
  }

  state(){
    alert("state")
  }

}
