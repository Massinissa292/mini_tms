import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule.model';
import { VehiculeService } from '../vehicule.service';



@Component({
  selector: 'app-ajout-vehicule',
  standalone: false,
  templateUrl: './ajout-vehicule.component.html',
  styleUrls: ['./ajout-vehicule.component.css']
  
})
export class AjouterVehiculeComponent {
    vehicule: Vehicule = {
  matricule: '',
  modele: '',
  type: '',
  capacite:0,
  statut: '',
    };
  
    messageSuccess = '';
    messageError = '';
  
    constructor(private VehiculeService: VehiculeService) {}
  
    onSubmit(form: any) {
      if (form.valid) {
        this.VehiculeService.create(this.vehicule).subscribe({
          next: (res) => {
            this.messageSuccess = 'Vehicule créé avec succès !';
            this.messageError = '';
            form.resetForm();
            console.log('C FAIT ');
          },
          error: (err) => {
            this.messageError = 'Erreur lors de la création du Vehicule.';
            this.messageSuccess = '';
            console.error(err);
          },
        });
      }
    }
  }