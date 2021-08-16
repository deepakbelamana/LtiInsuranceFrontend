import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleInsurance } from './vehicle-insurance';

@Injectable({
  providedIn: 'root'
})
export class VehicleInsuranceService {

 
  constructor(private httpClient:HttpClient) {}
  baseUrl:string="http://localhost:9887/vehicleRest/api";
  //baseUrl1:String="http://localhost:9787//vehicleInsurance/api";

   //RETRIEVING ALL
   getAllVehicles()
   {
     return this.httpClient.get(this.baseUrl+"/vehicle");
   }

   getHighestUserId()
   {
    return this.httpClient.get(this.baseUrl+"/highestid");
   }
 
   //ADDING
   addNewVehicle(vehicleInsurance:VehicleInsurance) //Observable<VehicleInsurance>
   {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // //let options = new RequestOptions({ headers: headers });

 

    //   return this.httpClient.post(this.baseUrl + "/vehicle", { vehicleInsurance })
    //   .pipe(catchError(this.handleError('addNewVehicle', vehicleInsurance))
     console.log(vehicleInsurance);
     return this.httpClient.post(this.baseUrl+"/vehicle",vehicleInsurance);
   }

   getPrice(age:any,maker:any,model:any){
    return this.httpClient.get("http://localhost:9887/VehicleInsurance/api"+"/"+maker+"/"+model+"/"+age);
   }
   
   gettwowheelermaker()
  {
    return this.httpClient.get("http://localhost:9887/VehicleInsurance/api"+"/twoWheeler");
  }
getfourwheelermaker()
  {
    return this.httpClient.get("http://localhost:9887/VehicleInsurance/api"+"/fourWheeler");
  }
  getmodelname(maker:any)
  {
    return this.httpClient.get("http://localhost:9887/VehicleInsurance/api"+"/model/"+maker);
  }
  calculatePremium(age:any,maker:any,model:any)
  {
    return this.httpClient.get("http://localhost:9887/VehicleInsurance/api"+"/"+maker+"/"+model+"/"+age)
  }
  getpolicyno(id:number){
    return  this.httpClient.get(this.baseUrl+"/policyno/"+id , {responseType: 'text'});
  }
  getbyid(id:number){
    return  this.httpClient.get(this.baseUrl+"/getbyid/"+id );
  }

}


