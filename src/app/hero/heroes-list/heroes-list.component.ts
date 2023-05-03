import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {

  heros: Observable<Hero[]>;
  showGrid = true;

  constructor() {
    //this.pokemonService.setTitle();
    //this.pokemon = this.pokemonService.pokemon;
    this.heros = of(HEROES);
  }

  search(term: string) {
    //this.pokemonService.search(term);
  }
}
