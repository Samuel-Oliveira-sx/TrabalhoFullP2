
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrlCadastro = 'http://localhost:5103/api/aluno/cadastro'; 
  private apiUrlAlunos = 'http://localhost:5103/api/aluno'; 

  constructor(private http: HttpClient) {}

  cadastrarUsuario(aluno: {
    senha: string;
    cpf: string;
    nome: string;
    email: string;
    dataNascimento: string;
    id: number;
  }): Observable<any> {
    return this.http.post<any>(this.apiUrlCadastro, aluno); 
  }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlAlunos);
  }
}