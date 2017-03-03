import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFire } from 'angularfire2';

import { AppRoutingModule } from './app.routing';
import { CameraComponent } from './camera.component';

import {
    AngularFireModule,
    AuthMethods,
    AuthProviders
} from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyAi__QZqwgn0iFC-h0lugw9XWc2IpQe2nE",
    authDomain: "openapi-cameras-nantes.firebaseapp.com",
    databaseURL: "https://openapi-cameras-nantes.firebaseio.com",
    storageBucket: "openapi-cameras-nantes.appspot.com",
    messagingSenderId: "578950092603"
};

@NgModule({
  declarations: [
    CameraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [AngularFire],
  bootstrap: [CameraComponent]
})
export class AppModule { }
