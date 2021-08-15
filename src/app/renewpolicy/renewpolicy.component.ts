import { LowerCasePipe } from '@angular/common';
import { JsonpClientBackend } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-renewpolicy',
  templateUrl: './renewpolicy.component.html',
  styleUrls: ['./renewpolicy.component.css']
})

export class RenewpolicyComponent implements OnInit {

  id:any=102;
  userdata:any;
  selectedpolicyno:any;
  vehicleage:any;
  model:any;
  modelname:any;
  maker:any;
  makername:any;
  modelnameL:any;
  makernameL:any;
  thirdpartyliability:any;
  comprehensive:any;
  planslist:any;
  planAmount:any;
  renewed:boolean=false;
  object:any;
  constructor(private server:ServerService) { }

 
  ngOnInit(): void {
     
      this.server.getpolicydetails(this.id).subscribe((data)=>
      {
            this.userdata=data;
            console.log(this.userdata);
            
      })
      
     
  }
  showplans(policyno:any,age:any)
  {

   
      this.server.getmodelbypolicy(policyno).subscribe((data)=>
      {
          
          console.log(data);
          this.model=data;
           this.modelname=this.model[0];
           localStorage.setItem("mname",this.modelname);  
      })
     
      this.server.getmakerbypolicy(policyno).subscribe((data)=>
      {
         console.log(data);
         this.maker=data;
         this.makername=this.maker[0];
         localStorage.setItem("mkname",this.makername);

      })

      this.modelnameL=localStorage.getItem("mname");
      this.makernameL=localStorage.getItem("mkname");

      console.log(this.makernameL.toLowerCase());
      console.log(this.modelnameL.toLowerCase());
      
      this.server.calculatePremium(age,this.makernameL.toLowerCase(),this.modelnameL.toLowerCase()).subscribe((data)=>
      {
           console.log(data);
           this.planslist=data;
           this.thirdpartyliability=this.planslist[0];
           this.comprehensive=this.planslist[1];
           
      })
   
  }


   renewPolicy(amount:any,policyno:any){

    this.server.renewPolicy(Math.floor(amount),policyno).subscribe((data)=>
    {
      console.log(data);
      this.object=data;
      console.log(this.object);
      if(this.object==true)
      {
        alert("renewd successfully");
      }
    })

   }




}
