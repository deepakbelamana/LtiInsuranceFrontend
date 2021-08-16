import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { Vehicleclaim } from '../vehicleclaim';

@Component({
  selector: 'app-addvehicleclaim',
  templateUrl: './addvehicleclaim.component.html',
  styleUrls: ['./addvehicleclaim.component.css']
})
export class AddvehicleclaimComponent implements OnInit {
  
  stat:Claim;
  stat1:Claim ;
   id:any;
   idnew:number=0;
  cm:any;
  vehicleclaim:Vehicleclaim;
  vehiclepolicy:any;
  
  constructor(private claimService:ClaimService, private route:ActivatedRoute,private router:Router) { 
    this.vehicleclaim=new Vehicleclaim;
    this.stat=new Claim();
    this.stat1=new Claim();
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
    this.claimService.getbyidvehicleinsurance(this.idnew).subscribe((data)=>{
      console.log(data);
      this.cm=data;
      console.log("cm=",this.cm);
     });

     this.claimService.getbyidvehicleinsurance(this.idnew).subscribe((data)=>{
      console.log(data);
      this.vehiclepolicy=data;
      console.log("vehiclepolicy",this.vehiclepolicy);
    });

  }

  saveVehicleData(){ 
    
    console.log("in save",this.vehicleclaim);
    this.vehicleclaim.userid=this.idnew;
    this.claimService.AddVehicleClaim(this.vehicleclaim).subscribe(
    (data)=>{
      console.log("Return Value from REST"+data); 
    })
  alert("data saved");
}
  
  }


