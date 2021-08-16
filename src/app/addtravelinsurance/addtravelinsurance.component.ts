import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TravelInsurance } from '../travel-insurance';
import { TravelInsuranceService } from '../travel-insurance.service';
import { Traveluser } from '../traveluser';

@Component({
  selector: 'app-addtravelinsurance',
  templateUrl: './addtravelinsurance.component.html',
  styleUrls: ['./addtravelinsurance.component.css']
})
export class AddtravelinsuranceComponent implements OnInit {

  travelinsur:TravelInsurance;
  travelusr:Traveluser;
  id:string|undefined;
  id1:number|undefined;
  destinatns=[];
  polno:any;
  linkid:number=0;
  uid:any;
  uidnew:number=0;
  constructor(private travelserv:TravelInsuranceService, private router:Router,private route:ActivatedRoute) { 
    this.travelinsur=new TravelInsurance();
    this.travelusr=new Traveluser();
    
    this.travelinsur.startdate=formatDate(new Date(),'yyyy-MM-dd','en');
    this.travelinsur.enddate=formatDate(new Date(),'yyyy-MM-dd','en');
    this.travelinsur.amount=1;
    this.travelinsur.plantype="xyz";
    this.travelserv.gethighestid().subscribe(
      (data:any)=>{
        console.log(data); 
       // this.id=data.toString();
       this.id1=data+1;
        console.log(this.id1);
        this.travelinsur.insuranceid=this.id1;
        console.log("Inside method:"+this.travelinsur.insuranceid);
        this.travelserv.getpolicyno(data).subscribe(
          (data:any)=>{
            console.log(data);
            this.polno=data;
            console.log(this.polno);
            this.travelinsur.policyno=data;
            
          }
        )
      }
    );
    
    console.log(this.travelinsur.enddate);

    this.travelserv.getlinkid().subscribe(
      (data:any)=>{
        console.log(data);
        this.linkid=+data;
       // this.travelusr.linkid=data;
        console.log(this.linkid);
      }
    )
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.uid = +params['id'];
       this.uidnew=+this.uid;

        console.log(this.uid);
        console.log(this.uidnew)
      }
    );

    this.travelserv.getdestinations().subscribe(
      (data:any)=>{
        console.log(data);
        this.destinatns=data;
        console.log(this.destinatns);
      }
    )
  }

  saveData()
  {
    this.travelusr.linkid=this.linkid;
   this.travelusr.policyno=this.travelinsur.policyno;
    this.travelusr.userid=this.uidnew;
    console.log(this.travelusr);
    this.travelserv.addlink(this.travelusr).subscribe(
      (data)=>{
        console.log("Return Value from REST"+data); 
      }
    );


     this.travelserv.addNewInsurance(this.travelinsur).subscribe(
        (data)=>{
          console.log("Return Value from REST"+data); 
        }
      );
   
      this.router.navigate(['planselection/'+this.travelinsur.insuranceid]);
   
  }
}
