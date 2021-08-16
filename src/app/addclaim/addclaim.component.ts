import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-addclaim',
  templateUrl: './addclaim.component.html',
  styleUrls: ['./addclaim.component.css']
})
export class AddclaimComponent implements OnInit {
  policyno:any;
  claims:Claim;
  cm:any;
  traveluser:any;
  id:any;
  id1:number|undefined;
  idnew:number=0;
  constructor(private claimService:ClaimService, private route:ActivatedRoute,private router:Router) { 
    this.claims=new Claim();
    this.claimService.getHighestUserId().subscribe(
      (data:any)=>{
        console.log(data); 
       // this.id=data.toString();
       this.id1=data+1;
        console.log(this.id1);
        this.claims.claimid=this.id1;
        console.log("Inside method:"+this.claims.claimid);
      });
  }

  ngOnInit(): void {
    
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
       this.idnew=+this.id;

        console.log(this.id);
        console.log(this.idnew)
      }
    );

    this.claimService.getbyuserid(this.idnew).subscribe((data)=>{
      console.log(data);
      this.cm=data;
      console.log("cms=",this.cm);
     });

     this.claimService.getbyidtraveluser(this.idnew).subscribe((data)=>{
      console.log(data);
      this.traveluser=data;
      console.log("traveluser",this.traveluser);
    });
  }

  saveData()
  {
    console.log("in save",this.claims);
    this.claims.userid=this.idnew;
    this.claimService.addClaim(this.claims).subscribe(
      (data)=>{
        console.log("Return Value from REST"+data); 
      }
    )
    alert("data saved");
  }


}


