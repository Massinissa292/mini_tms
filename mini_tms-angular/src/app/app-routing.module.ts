import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConducteurListComponent } from './Conducteur/conducteur-list/conducteur-list.component';/*
import { ConducteurFormComponent } from './conducteur/conducteur-form/conducteur-form.component';*/
import { AjouterConducteurComponent } from './Conducteur/ajout-conducteur/ajout-conducteur.component';
import { TrajetListComponent } from './Trajet/Trajet-list/Trajet-list.component';
import { AcceuilComponent } from './Acceuil/Acceuil.component';
import { AjouterTrajetComponent } from './Trajet/ajout-Trajet/ajout-Trajet.component';
import { VehiculeListComponent } from './Vehicule/vehicule-list/vehicule-list.component';
import { AjouterVehiculeComponent } from './Vehicule/ajout-vehicule/ajout-vehicule.component';
import { AjouterUtilisateurComponent } from './Utilisateur/ajout-utilisateur/ajout-utilisateur.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   // 🔑 Page de login (publique)
  { path: 'login', component: LoginComponent },

  // 🏠 Page d'accueil (publique ou protégée selon ton choix)
  { path: 'acceuil', component: AcceuilComponent },

  // 🚫 Routes protégées par le guard
  { path: 'conducteurs', component: ConducteurListComponent, canActivate: [AuthGuard] },
  { path: 'Ajouter', component: AjouterConducteurComponent, canActivate: [AuthGuard] },
  { path: 'trajets', component: TrajetListComponent, canActivate: [AuthGuard] },
  { path: 'AjouterTrajet', component: AjouterTrajetComponent, canActivate: [AuthGuard] },
  { path: 'vehicules', component: VehiculeListComponent, canActivate: [AuthGuard] },
  { path: 'AjouterVehicule', component: AjouterVehiculeComponent, canActivate: [AuthGuard] },
  { path: 'AjouterUtilisateur', component: AjouterUtilisateurComponent, canActivate: [AuthGuard] },

  // 🔄 Redirections
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  { path: '**', redirectTo: 'acceuil' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
