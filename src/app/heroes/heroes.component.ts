import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero ? : Hero ;

  constructor() { }

  ngOnInit(): void {
  }

  heroes = HEROES ; 

  onClick(hero : Hero)
  {

    this.hero = hero;

  }

}
