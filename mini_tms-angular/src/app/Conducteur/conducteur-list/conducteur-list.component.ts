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

  constructor(private conducteurService: ConducteurService) {}

  
  ngOnInit(): void {
    this.loadConducteurs();
  }

  loadConducteurs() {
    this.conducteurService.getAll().subscribe(data => {
      this.conducteurs = data;
    });
  }

  // ✅ Appeler delete
  deleteConducteur(id: number) {
    this.conducteurService.delete(id).subscribe(() => {
     
      this.loadConducteurs();
    });
  }
}


