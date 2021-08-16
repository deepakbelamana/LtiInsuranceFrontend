import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-showclaim',
  templateUrl: './showclaim.component.html',
  styleUrls: ['./showclaim.component.css']
})
export class ShowclaimComponent implements OnInit {
  claims:any;
  vehicleclaim:any;
  id:any;
  idnew:number=0;
  constructor(private claimService:ClaimService,private router:Router,private route:ActivatedRoute) { }
  

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
      this.claims=data;
      console.log("getb id",this.claims);
    });


    this.claimService.getbyidvehicle(this.idnew).subscribe((data)=>{
      console.log(data);
      this.vehicleclaim=data;
      console.log("cm=",this.vehicleclaim);
     })
  }
  gotovehicleclaim()
  {
    this.router.navigate(["addvehicleclaim/"+this.idnew]);
  }
  gototravelclaim()
  {
    this.router.navigate(["addtravelclaim/"+this.idnew]);
  }

}
