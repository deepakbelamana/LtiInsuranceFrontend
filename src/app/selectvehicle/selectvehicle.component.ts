import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server.service';

@Component({
  selector: 'app-selectvehicle',
  templateUrl: './selectvehicle.component.html',
  styleUrls: ['./selectvehicle.component.css']
})
export class SelectvehicleComponent implements OnInit {
  
  constructor(private server:ServerService) { }
  maker:any;
  model:any;
  makername:any;
  vehicleage:any;
  modelname:any;
  premiumlist:any;
  tpl:any;
  comp:any;
  divdisplay:boolean=false;
  ngOnInit(): void {
  }
  
  gettwowheeler()
  {  
      this.server.gettwowheelermaker().subscribe(
        (data)=>{
          console.log(data);
          this.maker=data;
          console.log(this.maker);          
        }
      )      
  }
  getfourwheeler()
  {
      this.server.getfourwheelermaker().subscribe(
        (data)=>{
          this.maker=data;
        }
      )
  }
  getmodel()
  { 
     console.log(this.makername);
     
     this.server.getmodelname(this.makername).subscribe(
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
        this.divdisplay=!this.divdisplay;
      
         this.server.calculatePremium(age,maker,model).subscribe(
           (data)=>
           {
             console.log(data);
             this.premiumlist=data;
             this.comp=this.premiumlist[0];
             this.tpl=this.premiumlist[1];
           }
         )
        
  }
}
