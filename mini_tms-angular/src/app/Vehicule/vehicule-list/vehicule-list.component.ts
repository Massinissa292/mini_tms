import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule.model';
import { VehiculeService } from '../vehicule.service';


@Component({
  selector: 'app-vehicule-list',
  standalone: false,
  templateUrl: './vehicule-list.component.html',
  
})
export class VehiculeListComponent implements OnInit {
  vehicules: Vehicule[] = [];

  constructor(private service: VehiculeService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.vehicules = data;
      console.log('Données reçues du backend :', this.vehicules);
    });
  }
}
