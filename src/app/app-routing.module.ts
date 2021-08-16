import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclaimComponent } from './addclaim/addclaim.component';
import { AddtravelinsuranceComponent } from './addtravelinsurance/addtravelinsurance.component';
import { AddvehicleclaimComponent } from './addvehicleclaim/addvehicleclaim.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BuycomponentComponent } from './buycomponent/buycomponent.component';
import { CountryComponent } from './country/country.component';
import { HomecompComponent } from './homecomp/homecomp.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { NewvehicleComponent } from './newvehicle/newvehicle.component';
import { PaymentComponent } from './payment/payment.component';
import { PlanselectionComponent } from './planselection/planselection.component';
import { RegisterComponent } from './register/register.component';
import { RenewpolicyComponent } from './renewpolicy/renewpolicy.component';

import { SelectvehicleComponent } from './selectvehicle/selectvehicle.component';
import { ShowclaimComponent } from './showclaim/showclaim.component';
import { SuccesscomponentComponent } from './successcomponent/successcomponent.component';
import { SucessComponent } from './sucess/sucess.component';

const routes: Routes = [
{
   path:"selectvehicle/:id",
   component:SelectvehicleComponent
},
{
  path:"renewVehicle/:id",
  component:RenewpolicyComponent
}
,
{
  path:'login',
component:LoginComponent
},

  {path:'register',
  component:RegisterComponent
},
{
  path:"home",
  component:HomecompComponent
},
{
  path:"Home/:id",
  component:HomecompComponent
}
,
{
  path:'travel/:id',
component:CountryComponent
},
{
  path:"newvehicle/:id",
  component:NewvehicleComponent
}
,
{
  path:'buyvehicle/:id',
component:BuycomponentComponent
},
{
  path:'success/:id',
component:SuccesscomponentComponent
},
{
  path:'addtravel/:id',
  component:AddtravelinsuranceComponent
}
,
{path:'planselection/:id',component:PlanselectionComponent},
{path:'payment/:id',component:PaymentComponent},
{path:'sucess/:id',component: SucessComponent},
{path:'addtravelclaim/:id',component:AddclaimComponent},
{
  path:'showclaim/:id',component:ShowclaimComponent
},
{
  path:"admin",component:AdminComponent
},
{

  path:'addvehicleclaim/:id',component:AddvehicleclaimComponent
}
,
{
  path:"adminLogin",
  component:AdminloginComponent
}
,
{
  path:"",
  component:LandingpageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
