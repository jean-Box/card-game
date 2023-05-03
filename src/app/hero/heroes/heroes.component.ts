import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/hero/hero';
import { HEROES } from 'src/app/hero/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes: Observable<Hero[]>;

  selectedHero?: Hero;

  constructor() {
    this.heroes = of(HEROES);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}
