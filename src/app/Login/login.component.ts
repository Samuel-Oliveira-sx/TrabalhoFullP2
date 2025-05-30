
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
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
    MatTabsModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedTabIndex = 0;
  loginFormAluno!: FormGroup;
  loginFormProfessor!: FormGroup;

  constructor(private router: Router) {
    this.loginFormAluno = this.criarFormulario('Aluno');
    this.loginFormProfessor = this.criarFormulario('Professor');
  }

  criarFormulario(tipo: string): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', Validators.required),
      tipoUsuario: new FormControl(tipo)
    });
  }

  fazerLogin() {
    const loginAtivo = this.selectedTabIndex === 0 ? this.loginFormAluno : this.loginFormProfessor;

    if (loginAtivo.invalid) {
      console.error('Preencha todos os campos corretamente!');
      return;
    }

    console.log(`Login como ${loginAtivo.value.tipoUsuario}:`, loginAtivo.value);

    // Simulação de login bem-sucedido
    setTimeout(() => {
      console.log('Login efetuado com sucesso!');
      this.router.navigate(['/home']); // 🔹 Redireciona para a página Home
    }, 1000);
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }
}