import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  num:number=0;
  result:number=0;
  area(){
    this.result=(2*3.14*this.num*this.num);
  }
  perimeter(){
    this.result=(2*3.14*this.num);
  }


}
