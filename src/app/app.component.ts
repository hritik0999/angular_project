// import { Component, OnInit } from '@angular/core';
// import { HeroService } from './heroes/hero.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit{
//   constructor(private heroServie:HeroService){}
//   ngOnInit() {
//       this.username=this.heroServie.myData;
//       this.heroServie.getYourData().then(data=>{this.getYourUserData=data})
//   }
//   title = 'My Heroes';
//   myData="Hritik";
//   getYourUserData!:any;
//   username!:{name:string};
//   getData=()=>{
//     return this.myData;
//   }
// }
import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { pipe } from "rxjs";
import { AppService } from "./service/app.service";
import * as Actions from './store/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  constructor(private appService: AppService,private store:Store){}

  name:string;
  email:string;
  password:string;
  male:any;
  female:any;

  submit(){
    console.log(this.name,"name",this.email,"email",this.password,"password",this.male,"male",this.female,"female")
    this.appService.shareUserInfo(this.name,this.email,this.password).subscribe(
      data=>console.log(data)
    );
    this.store.dispatch(new Actions.SubmitUserInformation({
    name:this.name,
    email: this.email,
    password: this.password}))
  }
}