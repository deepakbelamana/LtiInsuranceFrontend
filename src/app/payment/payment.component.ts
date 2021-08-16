import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TravelInsurance } from '../travel-insurance';
import { TravelInsuranceService } from '../travel-insurance.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  travelinsur:TravelInsurance;
  id:any;
  idnew:number=0;
  amount:any;
    constructor(private route:ActivatedRoute, private travelinsurance:TravelInsuranceService,private router:Router) {
  this.travelinsur=new TravelInsurance;
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
  
        this.travelinsurance.getinsurancebyid(this.idnew).subscribe(
          (data)=>{
            this.travelinsur=data as TravelInsurance;
            console.log(this.travelinsur);
            this.amount=this.travelinsur.amount;
          }
        )
    }
  
  
    success(){
      this.router.navigate(['sucess/'+this.travelinsur.insuranceid]);
    }
  }


