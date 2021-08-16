import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TravelInsurance } from './travel-insurance';
import { Traveluser } from './traveluser';

@Injectable({
  providedIn: 'root'
})
export class TravelInsuranceService {

  
  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9887/travelrest/api";

  getAllInsurance()
  {
    return this.httpClient.get(this.baseUrl+"/travel");
  }

  addNewInsurance(travelinsur:TravelInsurance)
  {
    return this.httpClient.post(this.baseUrl+"/travel",travelinsur , {responseType: 'text'});
  }

  addlink(travelusr:Traveluser)
  {
    return this.httpClient.post("http://localhost:9887/traveluserrest/api/link" ,travelusr, {responseType: 'text'});
  }

  getlinkid()
  {
    return this.httpClient.get("http://localhost:9887/traveluserrest/api/highest" , {responseType: 'text'});
  }

  gethighestid()
  {
    return this.httpClient.get(this.baseUrl+"/highestid");
  }

  getpolicyno(id:number){
    return  this.httpClient.get(this.baseUrl+"/policyno/"+id , {responseType: 'text'});
  }

  getdestinations(){
    return this.httpClient.get("http://localhost:9887/countryrest/api/destinations");
  }

  getinsurancebyid(id:number){
    return this.httpClient.get("http://localhost:9887/travelrest/api/getbyid/"+id);
  }

  getpricebronze(to:string,from:string,days:number){
    return this.httpClient.get("http://localhost:9887/countryrest/api/countrybyname/"+from+"/"+to+"/"+days+"/bronze");
  }

  getpricesilver(to:string,from:string,days:number){
    return this.httpClient.get("http://localhost:9887/countryrest/api/countrybyname/"+from+"/"+to+"/"+days+"/silver");
  }

  getpricegold(to:string,from:string,days:number){
    return this.httpClient.get("http://localhost:9887/countryrest/api/countrybyname/"+from+"/"+to+"/"+days+"/gold");
  }
}
