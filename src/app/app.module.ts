import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Exercice3Component } from './exercice-3/exercice-3.component';
import { Exercice6Service } from './exercice-6.service';
import { AddYoutuberComponent } from './add-youtuber/add-youtuber.component';


@NgModule({
  imports:      [ BrowserModule,  RouterModule.forRoot([
      { path: 'Accueil', component:  AppComponent},
      { path:'youtubers', component: Exercice3Component },
      { path:'add', component: AddYoutuberComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
  FormsModule],
  declarations: [ AppComponent, HelloComponent, Exercice3Component, AddYoutuberComponent ],
  bootstrap:    [ AppComponent ],
  providers: [Exercice6Service]
  
})
export class AppModule { }
