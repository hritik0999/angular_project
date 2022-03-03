import { Component, OnInit } from '@angular/core';
import { HeroService } from './heroes/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private heroServie:HeroService){}
  ngOnInit() {
      this.username=this.heroServie.myData;
      this.heroServie.getYourData().then(data=>{this.getYourUserData=data})
  }
  title = 'My Heroes';
  myData="Hritik";
  getYourUserData!:any;
  username!:{name:string};
  getData=()=>{
    return this.myData;
  }
}
