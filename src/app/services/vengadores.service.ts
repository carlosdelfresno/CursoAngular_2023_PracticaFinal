import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Vengador } from '../models/Vengador';

@Injectable({
  providedIn: 'root',
})
export class VengadoresService {
  http = inject(HttpClient);

  constructor() {}

  getVengadores(): Observable<Vengador[]> {
    return this.http.get<Vengador[]>(`vengadores`);
  }

  getVengador(id: number): Observable<Vengador> {
    return this.http.get<Vengador>(`vengadores/${id}`);
  }

  addVengador(vengador: Vengador): Observable<Vengador> {
    return this.http.post<Vengador>(`vengadores`, vengador);
  }

  editVengador(id: number, vengador: Vengador): Observable<Vengador> {
    return this.http.put<Vengador>(`vengadores/${id}`, vengador);
  }

  deleteVengador(id: number) {
    return this.http.delete(`vengadores/${id}`);
  }
}
