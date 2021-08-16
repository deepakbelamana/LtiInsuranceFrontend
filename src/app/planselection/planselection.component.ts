import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TravelInsurance } from '../travel-insurance';
import { TravelInsuranceService } from '../travel-insurance.service';

@Component({
  selector: 'app-planselection',
  templateUrl: './planselection.component.html',
  styleUrls: ['./planselection.component.css']
})
export class PlanselectionComponent implements OnInit {

  
  id:any;
  days:number=0;
  bronze:number=0;
  silver:number=0;
  gold:number=0;
  travelinsur:TravelInsurance;
  desti:any;
  finalprice:number=0;
  idnew:number=0;
  count:any;
  constructor(private route:ActivatedRoute, private travelinsurance:TravelInsuranceService, private router:Router) { 
   //console.log(this.router.getCurrentNavigation().extras);
   //this.router.getCurrentNavigation()?.extras.state;
    //console.log(this.id);
    this.travelinsur=new TravelInsurance;
    
  }

  ngOnInit(): void {
    console.log("a")
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
         this.idnew=+this.id;

          console.log(this.id);
          console.log(this.idnew)
        }
      );
        console.log("b");
        this.getid();
        console.log("c");
     /* this.travelinsurance.getinsurancebyid(this.idnew).subscribe(
        (data)=>{
          this.travelinsur=data as TravelInsurance;
          console.log(this.travelinsur);
          this.desti=this.travelinsur.destination;
          this.count=this.travelinsur.membercount;
        }
      );*/
  }

getid(){
  this.travelinsurance.getinsurancebyid(this.idnew).subscribe(
    (data)=>{
      this.travelinsur=data as TravelInsurance;
      console.log(this.travelinsur);
      this.desti=this.travelinsur.destination;
      this.count=this.travelinsur.membercount;
    });
  console.log("here");
}

  update(){
    this.travelinsur.amount=this.finalprice;
    

    this.travelinsurance.addNewInsurance(this.travelinsur).subscribe(
      (data)=>{
        console.log("Return Value from REST"+data); 
      }
    );
    this.router.navigate(['payment/'+this.travelinsur.insuranceid]);
  }

  getplans(){
    console.log(this.travelinsur);
    console.log(this.desti)
    this.travelinsurance.getpricebronze('test1' ,this.desti,this.days).subscribe(
      (data:any)=>{
        this.bronze=data;
      }
    );
    this.travelinsurance.getpricesilver('test1' ,this.desti,this.days).subscribe(
      (data:any)=>{
        this.silver=data;
      }
    );
    this.travelinsurance.getpricegold('test1' ,this.desti,this.days).subscribe(
      (data:any)=>{
        this.gold=data;
      }
    );
  }

  buybronze(){
    console.log(this.count);
    this.finalprice=this.bronze*this.count;
    this.travelinsur.plantype="bronze";
  }

  buysilver(){
     this.finalprice=this.silver*this.count;
     this.travelinsur.plantype="silver";
  }

  buygold(){
     this.finalprice=this.gold*this.count;
     this.travelinsur.plantype="gold";
  }
}
