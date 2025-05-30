
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrlCadastroAluno = 'http://localhost:5103/api/aluno/cadastro'; 
  private apiUrlCadastroProfessor = 'http://localhost:5103/api/professor/cadastro';
  private apiUrlAlunos = 'http://localhost:5103/api/aluno';  
  private apiUrlProfessores = 'http://localhost:5103/api/professor';

  constructor(private http: HttpClient) {}

  cadastrarUsuario(usuario: { // 🔹 Agora trata tanto alunos quanto professores
    senha: string;
    cpf: string;
    nome: string;
    email: string;
    dataNascimento: string;
    id: number;
    tipoUsuario: string; // 🔹 Identifica se é "Aluno" ou "Professor"
  }): Observable<any> {
    const apiUrl = usuario.tipoUsuario === 'Aluno' ? this.apiUrlCadastroAluno : this.apiUrlCadastroProfessor;
    return this.http.post<any>(apiUrl, usuario);
  }

  getAlunos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlAlunos);
  }

  getProfessores(): Observable<any[]> { 
    return this.http.get<any[]>(this.apiUrlProfessores);
  }
}