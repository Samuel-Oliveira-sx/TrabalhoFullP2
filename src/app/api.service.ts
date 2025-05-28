import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://localhost:5103/api'; // Base da API

  constructor(private http: HttpClient) {}

  // Cadastro de alunos
  cadastrarAluno(aluno: any) {
    return this.http.post(`${this.baseUrl}/aluno`, aluno);
  }

  // Cadastro de professores
  cadastrarProfessor(professor: any) {
    return this.http.post(`${this.baseUrl}/professor`, professor);
  }

  // Login de alunos
  loginAluno(loginData: any) {
    return this.http.post(`${this.baseUrl}/aluno/login`, loginData);
  }

  // Login de professores
  loginProfessor(loginData: any) {
    return this.http.post(`${this.baseUrl}/professor/login`, loginData);
  }
}