import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HEROES } from '../hero/mock-heroes';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = HEROES.slice(1,5);
  }
}