import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    AboutCeoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
