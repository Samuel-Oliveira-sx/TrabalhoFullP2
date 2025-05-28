
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'https://localhost:5130/api/aluno/cadastro';


  constructor(private http: HttpClient) {}

  getAlunos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}