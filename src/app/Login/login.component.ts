
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http'; // Adicionado para suporte a requisições HTTP
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}

  fazerLogin() {
    if (this.loginForm.invalid) {
      console.error('Preencha todos os campos corretamente!');
      return;
    }

    console.log('Tentando login com:', this.loginForm.value);
    // Aqui poderia ser feita uma chamada à API para autenticação do usuário
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}