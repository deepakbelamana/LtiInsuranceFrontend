import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  constructor(private httpClient:HttpClient) { }

  baseUrl:string="http://localhost:9887/loginRest/api";

  getAllUsers()
  {
    return this.httpClient.get(this.baseUrl+"/user");
  }


  findUserByLogin(email:string,password:string)
  {
    return this.httpClient.get(this.baseUrl+"/userbyemail/"+email+"/"+password);
  }
  
  
  getHighestId()
  {
    return this.httpClient.get(this.baseUrl+"/usermax");
  }
  
  addUser(user:User)
  {
    return this.httpClient.post(this.baseUrl+"/user",user);
  }

}

