import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { HomecompComponent } from './homecomp/homecomp.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RenewpolicyComponent } from './renewpolicy/renewpolicy.component';

import { SelectvehicleComponent } from './selectvehicle/selectvehicle.component';

const routes: Routes = [
{
   path:"selectvehicle",
   component:SelectvehicleComponent
},
{
  path:"renewVehicle",
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
  path:'travel',
component:CountryComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
