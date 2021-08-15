import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   
  user:User;
  id:number=0;

  constructor(private loginService:LoginService) { 
    this.user=new User();
  }

  ngOnInit(): void {

    this.loginService.getHighestId().subscribe
    (
      (data:any)=>{
        console.log(data);
        this.id=data;
        console.log(this.id);
      }
    )
  }


  saveData()
  {
    this.user.userid=this.id;
    console.log(this.user);
   
   
    this.loginService.addUser(this.user).subscribe(
      (data)=>{
        console.log("return value from rest"+data);
      }
    )
    
  }
}


