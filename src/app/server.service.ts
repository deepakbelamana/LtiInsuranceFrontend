import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private httpClient:HttpClient) { }
   
baseUrl:string="http://localhost:9887/VehicleInsurance/api";
     
  gettwowheelermaker()
  {
    return this.httpClient.get(this.baseUrl+"/twoWheeler");
  }
  getmodelname(maker:any)
  {
    return this.httpClient.get(this.baseUrl+"/model/"+maker);
  }
  getfourwheelermaker()
  {
    return this.httpClient.get(this.baseUrl+"/fourWheeler");
  }
  calculatePremium(age:any,maker:any,model:any)
  {
    return this.httpClient.get(this.baseUrl+"/"+maker+"/"+model+"/"+age)
  }
  getpolicydetails(id:any)
  {
    return this.httpClient.get("http://localhost:9887/RenewInsurance/api/"+id);
  }
  getmodelbypolicy(policyno:any)
  {
    return this.httpClient.get("http://localhost:9887/RenewInsurance/api/model/"+policyno)
  }

  getmakerbypolicy(policyno:any)
  {
    return this.httpClient.get("http://localhost:9887/RenewInsurance/api/maker/"+policyno)
  }

   renewPolicy(amount:any,policy:any)
  {
    return this.httpClient.get("http://localhost:9887/RenewInsurance/api"+"/"+amount+"/"+policy)
  }
}
