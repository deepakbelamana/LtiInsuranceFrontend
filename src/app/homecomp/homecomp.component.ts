import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-homecomp',
  templateUrl: './homecomp.component.html',
  styleUrls: ['./homecomp.component.css']
})
export class HomecompComponent implements OnInit {

  showbutton:boolean=true;
  showloginbutton:boolean=false;
  id:any;
  idnew:number=0;
  constructor(private route:ActivatedRoute) { }

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
done(){
  this.showbutton=!this.showbutton;
  this.showloginbutton=!this.showloginbutton;
}
}