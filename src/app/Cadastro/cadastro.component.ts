
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cadastro',
  standalone: true, 
  imports: [
    NgIf, 
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  tipoUsuario: string = '';

  selecionarUsuario(tipo: string) {
    this.tipoUsuario = tipo;
  }

  fazerCadastro() {
    console.log(`Cadastro realizado como ${this.tipoUsuario}`);
  }
}