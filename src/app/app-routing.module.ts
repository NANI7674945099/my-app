import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeesdataComponent } from './employeesdata/employeesdata.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { WeatherComponent } from './weather/weather.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateuserTaskComponent } from './createuser-task/createuser-task.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CommunicationComponent } from './communication/communication.component';
import { CommunicationmComponent } from './communicationm/communicationm.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { RatingComponent } from './rating/rating.component';
import { TextAreaComponent } from './text-area/text-area.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
    {path:'home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'databinding',component:DatabindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employeesdata',component:EmployeesdataComponent},
    {path:'vehicles',component:VehiclesComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'mail',component:MailComponent},
    {path:'weather',component:WeatherComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'student-card',component:StudentCardComponent},
    {path:'create-student',component:CreateStudentComponent},
    {path:'edit-student/:id',component:CreateStudentComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi',component:BmiComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'createuser-task',component:CreateuserTaskComponent},
    {path:'login',component:LoginComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent},
    {path:'student-details/:id',component:StudentDetailsComponent},
    {path:'communication',component:CommunicationComponent},
    {path:'communicationm',component:CommunicationmComponent},
    {path:'sibling1',component:Sibling1Component},
    {path:'sibling1',component:Sibling2Component},
    {path:'rating',component:RatingComponent},
    {path:'text-area',component:TextAreaComponent}


  ]},

  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
  },
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 