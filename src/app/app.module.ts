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

@NgModule({
  declarations: [
    AppComponent,
    SelectvehicleComponent,
    RenewpolicyComponent,
    LoginComponent,
    RegisterComponent,
    HomecompComponent,
    CountryComponent,
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
