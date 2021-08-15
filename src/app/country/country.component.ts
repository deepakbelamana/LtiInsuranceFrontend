import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  
  cont:any;
  country:any;
  countryto:any;

  plan=["Bronze","Silver","Gold"];
  days:number=0;
  p1:string="";
  price:any;
  
  constructor(private tService:CountryService) {
    
    
    }
  
  ngOnInit(): void {
    this.tService.getAllCountry().subscribe(
      (data)=>
      {
       this.cont=data;
       console.log(this.cont);
      }
    )
  }
  

 
  Calculate()
  {
     console.log(this.country,this.countryto,this.p1,this.days);
     

    this.tService.findCountryByCountry(this.country,this.countryto,this.days,this.p1).subscribe(
      (data)=>
      {
        console.log(data);
        this.price=data;
        

      }


    )
  }

  
/*
  findCont()
  {

    alert(this.country);
  }

  findCont2()
  {

    alert(this.countryto);
  }
  */

}