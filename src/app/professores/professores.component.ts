
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './professores.component.html'
})
export class ProfessoresComponent {
  professores = [
    { nome: 'Professor 1', email: 'prof1@email.com' },
    { nome: 'Professor 2', email: 'prof2@email.com' }
  ];
}