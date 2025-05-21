import { Component } from '@angular/core';

@Component({
  selector: 'app-communicationm',
  templateUrl: './communicationm.component.html',
  styleUrls: ['./communicationm.component.css']
})
export class CommunicationmComponent {
  name:string='';
   display(data:string){
    this.name=data;
  }

}
