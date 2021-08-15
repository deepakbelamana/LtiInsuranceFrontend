import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9887/countryrest/api";

//RETRIEVING ALL country
getAllCountry()
{
  return this.httpClient.get(this.baseUrl+"/destinations");
}
findCountryByCountry(from:string,to:string,days:number,plan:string) 

  {
    return this.httpClient.get(this.baseUrl+"/countrybyname/"+from+"/"+to+"/"+days+"/"+plan);
  }

}

