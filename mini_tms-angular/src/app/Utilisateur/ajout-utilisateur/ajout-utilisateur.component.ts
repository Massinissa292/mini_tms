import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../Utilisateur.model';
import { UtilisateurService } from '../Utilisateur.services';



@Component({
  selector: 'app-ajout-utilisateur',
  standalone: false,
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
  
})
export class AjouterUtilisateurComponent {
    utilisateur: Utilisateur = {
      nom: '',
      email: '',
      motDePasse: '',
      role: '',
    };
  
    messageSuccess = '';
    messageError = '';
  
    constructor(private utilisateurService: UtilisateurService) {}
  
    onSubmit(form: any) {
      if (form.valid) {
        this.utilisateurService.create(this.utilisateur).subscribe({
          next: (res) => {
            this.messageSuccess = 'Conducteur créé avec succès !';
            this.messageError = '';
            form.resetForm();
            console.log('C FAIT ');
          },
          error: (err) => {
            this.messageError = 'Erreur lors de la création du conducteur.';
            this.messageSuccess = '';
            console.error(err);
          },
        });
      }
    }
  }