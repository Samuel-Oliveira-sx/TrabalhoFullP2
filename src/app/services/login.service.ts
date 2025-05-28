
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private alunoLogado: any | null = null;  // ✅ Agora separa aluno e professor
  private professorLogado: any | null = null;

  realizarLoginAluno(dadosLogin: { email: string; senha: string; cpf: string; nome: string }): boolean {
    // Simulação de autenticação do aluno
    if (dadosLogin.email === 'aluno@escola.com' && dadosLogin.senha === 'senhaAluno') {
      this.alunoLogado = {
        senha: dadosLogin.senha,
        cpf: dadosLogin.cpf,
        nome: dadosLogin.nome,
        email: dadosLogin.email,
        dataNascimento: '2000-01-01',
        planosAtivos: ['Plano Básico'],
        dataMatricula: '2025-05-26T01:19:53.574Z',
        ativo: true,
        id: 1001
      };
      return true;
    }
    return false;
  }

  realizarLoginProfessor(dadosLogin: { email: string; senha: string; cpf: string; nome: string }): boolean {
    // Simulação de autenticação do professor
    if (dadosLogin.email === 'professor@escola.com' && dadosLogin.senha === 'senhaProfessor') {
      this.professorLogado = {
        senha: dadosLogin.senha,
        cpf: dadosLogin.cpf,
        nome: dadosLogin.nome,
        email: dadosLogin.email,
        dataNascimento: '1980-05-10',
        planosAtivos: ['Plano Avançado'],
        dataMatricula: '2025-05-26T01:19:53.574Z',
        ativo: true,
        id: 2001
      };
      return true;
    }
    return false;
  }

  obterAlunoLogado(): any | null {
    return this.alunoLogado;
  }

  obterProfessorLogado(): any | null {
    return this.professorLogado;
  }

  logoutAluno(): void {
    this.alunoLogado = null;
  }

  logoutProfessor(): void {
    this.professorLogado = null;
  }
}