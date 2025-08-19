import { Component } from '@angular/core';
import { ConducteurService } from '../Conducteur/conducteur.service';

@Component({
  standalone: false,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    menuTrajetOpen = false;
    menuConducteurOpen = false;
    
    toggleTrajet(event: Event) {
      event.preventDefault();
      this.menuTrajetOpen = !this.menuTrajetOpen;
      this.menuConducteurOpen = false; // ferme l'autre
    }
    
    toggleConducteur(event: Event) {
      event.preventDefault();
      this.menuConducteurOpen = !this.menuConducteurOpen;
      this.menuTrajetOpen = false; // ferme l'autre
    }
  searchId!: number;
  conducteurTrouve: any = null; // pour stocker le résultat
  erreurRecherche: string | null = null; // pour stocker un message d'erreur

  constructor(private conducteurService: ConducteurService) {}

  searchById() {
    if (this.searchId) {
      this.conducteurService.getById(this.searchId).subscribe({
        next: (data) => {
          console.log('Conducteur trouvé :', data);
          this.conducteurTrouve = data;
          this.erreurRecherche = null;
        },
        error: (err) => {
          console.error('Erreur de recherche :', err);
          this.conducteurTrouve = null;
          this.erreurRecherche = 'Aucun conducteur trouvé pour cet ID.';
        }
      });
    }
  }
}
