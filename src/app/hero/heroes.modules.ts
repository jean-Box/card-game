import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroesDetailComponent,
    HeroesListComponent
  ],
  imports:[
    CommonModule,
    HeroesRoutingModule,
  ],
  exports:[
    HeroesComponent
  ]
})
export class HeroesModule { }