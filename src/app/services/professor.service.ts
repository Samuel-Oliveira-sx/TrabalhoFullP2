
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private apiUrl = 'http://localhost:5130/api/professor/cadastro';

  constructor(private http: HttpClient) {}

  getProfessores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}