import { Component, OnInit } from '@angular/core';
import { ConducteurService } from '../conducteur.service';
import { Conducteur } from '../conducteur.model';

@Component({
  selector: 'app-ajout-conducteur',
  standalone: false,
  templateUrl: './ajout-conducteur.component.html',
  styleUrls: ['./ajout-conducteur.component.css']
  
})
export class AjouterConducteurComponent {
    conducteur: Conducteur = {
      nom: '',
      prenom: '',
      telephone: '',
      numeroPermis: '',
    };
  
    messageSuccess = '';
    messageError = '';
  
    constructor(private conducteurService: ConducteurService) {}
  
    onSubmit(form: any) {
      if (form.valid) {
        this.conducteurService.create(this.conducteur).subscribe({
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