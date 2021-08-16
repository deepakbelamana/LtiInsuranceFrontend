import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  id:any;
  idnew:number=0;
  plan=["Bronze","Silver","Gold"];
  days:number=0;
  p1:string="";
  price:any;
  
  constructor(private tService:CountryService, private router:Router,private route:ActivatedRoute) {
    
    
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

  gotohome()
  {
    this.router.navigate(['Home/'+this.idnew]);
  }
  
}