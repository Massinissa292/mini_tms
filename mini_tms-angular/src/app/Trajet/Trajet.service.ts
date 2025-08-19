import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trajet  } from './Trajet.model';

@Injectable({
  providedIn: 'root'
})
export class  TrajetService {
  private apiUrl = 'http://localhost:8080/api/trajets';

  constructor(private http: HttpClient) {}

  getAll(): Observable<  Trajet[]> {
    return this.http.get<Trajet[]>(this.apiUrl);
  }

  getById(id: number): Observable<Trajet > {
    return this.http.get<Trajet>(`${this.apiUrl}/${id}`);
  }

  create(trajet:Trajet ): Observable<Trajet> {
    return this.http.post<Trajet >(this.apiUrl, trajet);
  }

  update(id: number, trajet: Trajet  ): Observable<Trajet > {
    return this.http.put<Trajet   >(`${this.apiUrl}/${id}`, trajet);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
