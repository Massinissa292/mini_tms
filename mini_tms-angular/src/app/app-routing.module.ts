import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConducteurListComponent } from './Conducteur/conducteur-list/conducteur-list.component';/*
import { ConducteurFormComponent } from './conducteur/conducteur-form/conducteur-form.component';*/
import { AjouterConducteurComponent } from './Conducteur/ajout-conducteur/ajout-conducteur.component';
import { TrajetListComponent } from './Trajet/Trajet-list/Trajet-list.component';
import { AcceuilComponent } from './Acceuil/Acceuil.component';
import { AjouterTrajetComponent } from './Trajet/ajout-Trajet/ajout-Trajet.component';
import { VehiculeListComponent } from './Vehicule/vehicule-list/vehicule-list.component';

const routes: Routes = [
  { path: 'conducteurs', component: ConducteurListComponent },
  { path: 'Ajouter', component: AjouterConducteurComponent },
  { path: 'trajets', component: TrajetListComponent },
   { path: 'vehicules', component: VehiculeListComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'AjouterTrajet', component: AjouterTrajetComponent }, // ⚠️ doit correspondre EXACTEMENT à tes liens
  { path: '**', redirectTo: 'acceuil' },
  

  


  { path: 'conducteurs', redirectTo: 'conducteurs', pathMatch: 'full' },

  { path: 'Trajet', redirectTo: 'trajets', pathMatch: 'full' },
  { path: '', redirectTo: 'Acceuil', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
