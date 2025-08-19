export interface Vehicule {
  id?: number;        // correspond à Long en Java
  matricule: string;
  modele: string;
  type: string;
  capacite: number;
  statut: string;
}
