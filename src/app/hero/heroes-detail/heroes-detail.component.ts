import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from 'src/app/hero/hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent {

  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    console.log(this.route.snapshot.paramMap);
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = HEROES[id];
  }
  
  goBack(): void {
    this.location.back();
  }
}
