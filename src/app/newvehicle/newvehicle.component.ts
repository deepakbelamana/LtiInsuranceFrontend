import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VehicleInsurance } from '../vehicle-insurance';
import { VehicleInsuranceService } from '../vehicle-insurance.service';

@Component({
  selector: 'app-newvehicle',
  templateUrl: './newvehicle.component.html',
  styleUrls: ['./newvehicle.component.css']
})
export class NewvehicleComponent implements OnInit {
 
  vehi:VehicleInsurance;
  age:any;
  maker:any;
  model:any;
  makername:any;
  modelname:any;
  vehicleage:any;
  comp:any;
  tpl:any;
  premiumlist:any;
  id1:number|undefined;
  destinatns=[];
  polno:any;
  type:string|undefined;
  type2:string|undefined;
  num:number=0;
  plans:boolean=false;
  id:any;
  idnew:number=0;
  
  constructor(private vehicleInsuranceService:VehicleInsuranceService,private router:Router,private route:ActivatedRoute) {
    this.vehi=new VehicleInsurance();
    
    this.vehicleInsuranceService.getHighestUserId().subscribe(
      (data:any)=>{
        console.log(data); 
       // this.id=data.toString();
       this.id1=data+1;
        console.log(this.id1);
        this.vehi.insuranceid=this.id1;
        console.log("Inside method:"+this.vehi.insuranceid);

        this.vehicleInsuranceService.getpolicyno(data).subscribe(
          (data:any)=>{
            console.log(data);
            this.polno=data;
            console.log(this.polno);
            this.vehi.policyno=data;console.log(this.vehi);
          })
       }
      )
         
    this.vehi.startdate=formatDate(new Date(),'yyyy-MM-dd','en');
    //this.vehi.enddate=formatDate(new Date(),'yyyy-MM-dd','en');
   // console.log(this.vehi.enddate.substring(0,4));
    this.type=this.vehi.startdate.substring(0,4);
    this.num=+this.type;
    this.num+=1;
    console.log(this.num);
    this.type2=this.vehi.startdate.substring(4);
    console.log(this.type2);
    console.log(this.num+this.type2);
    this.vehi.enddate=this.num+this.type2;
    this.vehi.datebought=formatDate(new Date(),'yyyy-MM-dd','en');
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
     
        
     }
    
     gettwowheeler()
  {  
      this.vehicleInsuranceService.gettwowheelermaker().subscribe(
        (data)=>{
          console.log(data);
          this.maker=data;
          console.log(this.maker);          
        }
      )      
  }
  getfourwheeler()
  {
      this.vehicleInsuranceService.getfourwheelermaker().subscribe(
        (data)=>{
          this.maker=data;
        }
      )
  }
  getmodel()
  { 
     this.makername=this.vehi.maker;
     console.log(this.makername);
     
     this.vehicleInsuranceService.getmodelname(this.makername).subscribe(
       (data)=>
       {
         console.log(data);
         this.model=data;
         console.log(this.model);
         
       }
     )

  }
  getpremium(age:any,maker:any,model:any)
  {
    
      this.plans=!this.plans;
         this.vehicleInsuranceService.calculatePremium(age,maker,model).subscribe(
           (data)=>
           {
             console.log(data);
             this.premiumlist=data;
             this.comp=this.premiumlist[0];
             this.tpl=this.premiumlist[1];
           }
         )
        
  }


     saveData()
     {   
         this.vehi.valid=1;
        this.vehi.userid=this.idnew;
        console.log(this.vehi.userid);
        
         this.vehicleInsuranceService.addNewVehicle(this.vehi).subscribe(
          (data)=>{
             console.log("Return Value from REST"+data); 
          }
         )
        this.router.navigate(['buyvehicle/'+this.vehi.insuranceid]);
     }
   
}