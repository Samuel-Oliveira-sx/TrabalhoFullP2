
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router'; // ✅ Importando Router para navegação

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    MatTabsModule
  ]
})
export class LoginComponent {
  abaSelecionada = 0; // Começa na aba do Aluno

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router) {} // ✅ Injeta Router para navegação

  selecionarAba(index: number) {
    this.abaSelecionada = index;
  }

  fazerLogin() {
    console.log(`Login realizado na aba ${this.abaSelecionada === 0 ? 'Aluno' : 'Professor'} com email: ${this.loginForm.value.email}`);
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']); // ✅ Redireciona para a rota de cadastro
  }
}