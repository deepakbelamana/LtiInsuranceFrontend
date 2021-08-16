import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';
import { Vehicleclaim } from '../vehicleclaim';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  stat:Claim;
  stat1:Claim;
  statv:Vehicleclaim;
  statv1:Vehicleclaim;
  cid:number=0;
  cm:any;
  vm:any;
  constructor(private claimService:ClaimService) { 
    this.stat=new Claim();
    this.stat1=new Claim();
    this.statv=new Vehicleclaim();
    this.statv1=new Vehicleclaim();
    
  }

  ngOnInit(): void {
    this.claimService.getAllClaim().subscribe((data)=>{
      console.log(data);
      this.cm=data;
      console.log("status:",this.cm);
    });

    this.claimService.getAllVehicleClaims().subscribe((data)=>{
      console.log(data);
      this.vm=data;
      console.log("vm=",this.vm);
     });
  }

  saveData()
  {
    console.log("in save",this.stat);
    this.claimService.getbyid(this.stat.claimid).subscribe(
      (data)=>{
        console.log("Return Value from REST"+data);
        this.stat1=data as Claim;
        console.log("st",this.stat1); 
      }
    )
    // this.stat1.status=this.stat.status;
    // console.log("stat1",this.stat1);
    // this.claimService.addStatus(this.stat1).subscribe(
    //   (data)=>{
    //     console.log("Return Value from REST"+data); 
    //   }
    // )
  }

  savedata2()
  {
    this.stat1.status=this.stat.status;
    console.log("stat1",this.stat1);
    this.claimService.addStatus(this.stat1).subscribe(
      (data)=>{
        console.log("Return Value from REST"+data); 
      }
    )
  }

  saveVehicleData(){ 
    console.log("in save",this.statv);
    //this.cid=this.statv.claimid;
    this.claimService.getbyidvehicle(this.cid).subscribe(
      (data)=>{
        console.log("Return Value from REST"+data);
        this.statv1=data as Vehicleclaim;
        console.log("st",this.statv1); 
      }
    )

  //   console.log("in savevehicle",this.statv);
  //   this.claimService.addVehicleStatus(this.statv).subscribe(
  //   (data)=>{
  //     console.log("Return Value from REST"+data); 
  //   })
  // alert("data saved");
}

  saveVehicleData2(){

    console.log("stat",this.statv.status); 
    this.statv1.status=this.statv.status;
    console.log("stat2",this.statv1);
    
    this.claimService.addVehicleStatus1(this.statv1).subscribe(
      (data)=>{
        console.log("Return Value from REST"+data); 
      }
    )
  }

}
