import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { CameraService } from './camera/camera.service';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from "app/modal/modal.service";
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { PreLoaderComponent } from './pre-loader/pre-loader.component';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    CardComponent,
    NavbarComponent,
    PaginationComponent,
    ModalComponent,
    PreLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CameraService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
