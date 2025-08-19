import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../Trajet.service';
import { Trajet } from '../Trajet.model';

@Component({
  selector: 'app-Trajet-list',
  standalone: false,
  templateUrl: './Trajet-list.component.html',
  
})
export class TrajetListComponent implements OnInit {
  Trajets: Trajet[] = [];

  constructor(private service: TrajetService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.Trajets = data;
      console.log('Données reçues du backend :', this.Trajets);
    });
  }
}
