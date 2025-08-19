import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conducteur } from './conducteur.model';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {
  private apiUrl = 'http://localhost:8080/api/conducteurs';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Conducteur[]> {
    return this.http.get<Conducteur[]>(this.apiUrl);
  }

  getById(id: number): Observable<Conducteur> {
    return this.http.get<Conducteur>(`${this.apiUrl}/${id}`);
  }

  create(conducteur: Conducteur): Observable<Conducteur> {
    return this.http.post<Conducteur>(this.apiUrl, conducteur);
  }

  update(id: number, conducteur: Conducteur): Observable<Conducteur> {
    return this.http.put<Conducteur>(`${this.apiUrl}/${id}`, conducteur);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
