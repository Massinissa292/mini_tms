import { Component, OnInit } from '@angular/core';
import { Trajet } from '../Trajet.model';
import { TrajetService } from '../Trajet.service';


@Component({
  selector: 'app-ajout-trajet',
  standalone: false,
  templateUrl: './ajout-Trajet.component.html',
  styleUrls: ['./ajout-Trajet.component.css']
  
})
export class AjouterTrajetComponent {
    trajet: Trajet = {
      lieuDepart: '',
      lieuArrivee: '',
      dateHeure: '',
      statut: '',
    };
  
    messageSuccess = '';
    messageError = '';
  
    constructor(private trajetService: TrajetService) {}
  
    onSubmit(form: any) {
      if (form.valid) {
        this.trajetService.create(this.trajet).subscribe({
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