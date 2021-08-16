import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.css']
})
export class HomecompComponent implements OnInit {


  id:any;
  idnew:number=0;
  constructor(private route:ActivatedRoute, private router:Router) { }

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


gotoNewVehicle()
{
  console.log(this.idnew);
  this.router.navigate(['newvehicle/'+this.idnew]);

}
gotoClaims()
{
  this.router.navigate(['showclaim/'+this.idnew]);
}

renewpolicy()
{
  this.router.navigate(['renewVehicle/'+this.idnew])
}

gototravelinsurance()
{
  this.router.navigate(['addtravel/'+this.idnew])
}
calculatepremium()
{
  this.router.navigate(['selectvehicle/'+this.idnew])
}
calculatetravelpremium(){
  this.router.navigate(['travel/'+this.idnew])
}
gotolandingpage()
{
  this.router.navigate([''])
}
}
