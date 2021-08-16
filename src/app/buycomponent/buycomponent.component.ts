import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehicleInsurance } from '../vehicle-insurance';
import { VehicleInsuranceService } from '../vehicle-insurance.service';

@Component({
  selector: 'app-buycomponent',
  templateUrl: './buycomponent.component.html',
  styleUrls: ['./buycomponent.component.css']
})
export class BuycomponentComponent implements OnInit {

  
id:any;
idnew:number=0;
id1:number|undefined;
vehi:VehicleInsurance;
amount:any;

  constructor(private vehicleInsuranceService:VehicleInsuranceService,private route:ActivatedRoute,private router:Router) {
   this.vehi=new VehicleInsurance();
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
//method to gt inurncebyid creste====getamt from here n displ on html page 

this.vehicleInsuranceService.getbyid(this.idnew).subscribe(
  (data)=>{
    this.vehi=data as VehicleInsurance;
    console.log(this.vehi);
    this.amount=this.vehi.amount;
  }
)
  }

  //create getid()-this.router.navigate
  success()
  {
    this.router.navigate(['success/'+this.vehi.insuranceid]);
  }
}


