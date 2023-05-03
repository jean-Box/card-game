import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives here
import { HeroesModule } from './hero/heroes.modules';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ModalModule } from 'ngx-bootstrap/modal';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl7KKdIPWdW6x2wi2YqKSaW1iq3UFkl8k",
  authDomain: "card-game-db-8f275.firebaseapp.com",
  projectId: "card-game-db-8f275",
  storageBucket: "card-game-db-8f275.appspot.com",
  messagingSenderId: "915829515590",
  appId: "1:915829515590:web:91b7e6e328ab82e311b147",
  measurementId: "G-5V8YCZ560T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HeroesModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
