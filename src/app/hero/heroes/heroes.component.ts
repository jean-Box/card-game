import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from 'src/app/hero/hero';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { child, get, getDatabase, onValue, ref } from "firebase/database";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Database, listVal, objectVal } from '@angular/fire/database';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  //firestore: Firestore = inject(Firestore);
  private database: Database = inject(Database);
  //heroes: Observable<Hero[]>;
  heroes: any;

  selectedHero?: Hero;

  constructor() {
    //const aCollection = collection(this.firestore, 'heros')
    //this.heroes = collectionData(aCollection);

    const dbRef = ref(getDatabase(), `heros`);
    listVal(dbRef).subscribe((val) => this.heroes = val);

/** Observable version
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      this.heroes = of(data)
    });
     */
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
}
