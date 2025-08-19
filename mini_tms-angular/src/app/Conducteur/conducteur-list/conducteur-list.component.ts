import { Component, OnInit } from '@angular/core';
import { ConducteurService } from '../conducteur.service';
import { Conducteur } from '../conducteur.model';

@Component({
  selector: 'app-conducteur-list',
  standalone: false,
  templateUrl: './conducteur-list.component.html',
    styleUrls: ['./conducteur-list.component.css']
  
})
export class ConducteurListComponent implements OnInit {
  conducteurs: Conducteur[] = [];

  constructor(private service: ConducteurService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.conducteurs = data;
      console.log('Données reçues du backend :', this.conducteurs);
    });
  }
}
