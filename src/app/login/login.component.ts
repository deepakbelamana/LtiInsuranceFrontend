import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log:any;
  password1:string="";
  email1:string="";
  result:any;
  constructor(private lService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.lService.getAllUsers().subscribe(
      (data)=>
      {
        this.log=data;
        console.log(this.log);
      }


    )
  }

  Submit()
  {
    this.lService.findUserByLogin(this.email1,this.password1).subscribe(
      (data)=>
      {
        console.log(data);
        this.result=data;
        if(this.result==-1)
        {
          alert('Incorrect Email Id Or Password');
        }
        else
        {
        this.router.navigate(['Home/'+this.result]);
        }
      }
    );
   
    
  }
}


