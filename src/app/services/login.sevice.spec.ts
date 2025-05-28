
import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve autenticar um aluno com credenciais corretas', () => {
    const loginAluno = service.realizarLoginAluno({
      email: 'aluno@escola.com',
      senha: 'senhaAluno',
      cpf: '123.456.789-00',
      nome: 'Aluno Teste'
    });

    expect(loginAluno).toBeTrue();
    expect(service.obterAlunoLogado()).toBeDefined();
  });

  it('não deve autenticar um aluno com credenciais incorretas', () => {
    const loginAluno = service.realizarLoginAluno({
      email: 'email@errado.com',
      senha: 'senhaErrada',
      cpf: '123.456.789-00',
      nome: 'Aluno Teste'
    });

    expect(loginAluno).toBeFalse();
    expect(service.obterAlunoLogado()).toBeNull();
  });

  it('deve autenticar um professor com credenciais corretas', () => {
    const loginProfessor = service.realizarLoginProfessor({
      email: 'professor@escola.com',
      senha: 'senhaProfessor',
      cpf: '987.654.321-00',
      nome: 'Professor Teste'
    });

    expect(loginProfessor).toBeTrue();
    expect(service.obterProfessorLogado()).toBeDefined();
  });

  it('não deve autenticar um professor com credenciais incorretas', () => {
    const loginProfessor = service.realizarLoginProfessor({
      email: 'professor@errado.com',
      senha: 'senhaIncorreta',
      cpf: '987.654.321-00',
      nome: 'Professor Teste'
    });

    expect(loginProfessor).toBeFalse();
    expect(service.obterProfessorLogado()).toBeNull();
  });

  it('deve deslogar um aluno corretamente', () => {
    service.realizarLoginAluno({
      email: 'aluno@escola.com',
      senha: 'senhaAluno',
      cpf: '123.456.789-00',
      nome: 'Aluno Teste'
    });

    service.logoutAluno();
    expect(service.obterAlunoLogado()).toBeNull();
  });

  it('deve deslogar um professor corretamente', () => {
    service.realizarLoginProfessor({
      email: 'professor@escola.com',
      senha: 'senhaProfessor',
      cpf: '987.654.321-00',
      nome: 'Professor Teste'
    });

    service.logoutProfessor();
    expect(service.obterProfessorLogado()).toBeNull();
  });
});