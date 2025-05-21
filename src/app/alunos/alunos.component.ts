
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alunos',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './alunos.component.html'
})

export class AlunosComponent {
  alunos = [
    { nome: 'Teste 1', email: 'teste1@email.com' },
    { nome: 'Teste 2', email: 'teste2@email.com' }
  ];
}


  