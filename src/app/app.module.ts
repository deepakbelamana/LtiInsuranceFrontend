import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectvehicleComponent } from './selectvehicle/selectvehicle.component';

import { FormsModule } from '@angular/forms';
import { RenewpolicyComponent } from './renewpolicy/renewpolicy.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomecompComponent } from './homecomp/homecomp.component';
import { CountryComponent } from './country/country.component';
import { NewvehicleComponent } from './newvehicle/newvehicle.component';
import { BuycomponentComponent } from './buycomponent/buycomponent.component';
import { SuccesscomponentComponent } from './successcomponent/successcomponent.component';
import { AddtravelinsuranceComponent } from './addtravelinsurance/addtravelinsurance.component';
import { PaymentComponent } from './payment/payment.component';
import { PlanselectionComponent } from './planselection/planselection.component';
import { SucessComponent } from './sucess/sucess.component';
import { AddclaimComponent } from './addclaim/addclaim.component';
import { AddvehicleclaimComponent } from './addvehicleclaim/addvehicleclaim.component';
import { AdminComponent } from './admin/admin.component';
import { ShowclaimComponent } from './showclaim/showclaim.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectvehicleComponent,
    RenewpolicyComponent,
    LoginComponent,
    RegisterComponent,
    HomecompComponent,
    CountryComponent,
    NewvehicleComponent,
    BuycomponentComponent,
    SuccesscomponentComponent,
    AddtravelinsuranceComponent,
    PaymentComponent,
    PlanselectionComponent,
    SucessComponent,
    AddclaimComponent,
    AddvehicleclaimComponent,
    AdminComponent,
    ShowclaimComponent,
    AdminloginComponent,
    LandingpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
