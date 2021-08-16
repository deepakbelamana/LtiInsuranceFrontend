import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehicleInsurance } from '../vehicle-insurance';
import { VehicleInsuranceService } from '../vehicle-insurance.service';

@Component({
  selector: 'app-successcomponent',
  templateUrl: './successcomponent.component.html',
  styleUrls: ['./successcomponent.component.css']
})
export class SuccesscomponentComponent implements OnInit {

  id:any;
  idnew:number=0;
  id1:number|undefined;
  vehi:VehicleInsurance;
  amount:any;
  constructor(private router:Router,private route:ActivatedRoute,private vehicleInsuranceService:VehicleInsuranceService) {
    this.vehi=new VehicleInsurance(); 
  }
  
  ngOnInit(): void {
    //param
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
         this.idnew=+this.id;

          console.log(this.id);
          console.log(this.idnew)
        }
      );
    //getbyid
    this.vehicleInsuranceService.getbyid(this.idnew).subscribe(
      (data)=>{
        this.vehi=data as VehicleInsurance;
        console.log(this.vehi);
        this.amount=this.vehi.amount;
      }
    )
  }

}