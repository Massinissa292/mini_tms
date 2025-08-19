import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConducteurListComponent } from './Conducteur/conducteur-list/conducteur-list.component';/*
import { ConducteurFormComponent } from './conducteur/conducteur-form/conducteur-form.component';*/
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AjouterConducteurComponent } from './Conducteur/ajout-conducteur/ajout-conducteur.component';
import { TrajetListComponent } from './Trajet/Trajet-list/Trajet-list.component';
import { AcceuilComponent } from './Acceuil/Acceuil.component';
import { AjouterTrajetComponent } from './Trajet/ajout-Trajet/ajout-Trajet.component';
import { VehiculeService } from './Vehicule/vehicule.service';
import { VehiculeListComponent } from './Vehicule/vehicule-list/vehicule-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ConducteurListComponent,
    NavbarComponent,
    AjouterConducteurComponent,
    TrajetListComponent,
    AcceuilComponent,
    AjouterTrajetComponent,
    VehiculeListComponent
    

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
