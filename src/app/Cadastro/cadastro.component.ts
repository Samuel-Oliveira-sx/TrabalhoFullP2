
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  tipoUsuario: string = ''; // Inicialmente vazio para garantir que o usuário escolha uma opção
  mensagemSucesso: string = '';

  cadastroForm!: FormGroup;

  constructor(private cadastroService: CadastroService) {}

  criarFormulario(): FormGroup {
    return new FormGroup({
      nome: new FormControl<string>('', Validators.required),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      senha: new FormControl<string>('', Validators.required),
      cpf: new FormControl<string>('', Validators.required),
      dataNascimento: new FormControl<string>('', Validators.required),
      id: new FormControl<number>(0),
      tipoUsuario: new FormControl<string>('') // 🔹 Adicionado para evitar erros de tipagem
    });
  }

  selecionarTipo(tipo: string) {
    this.tipoUsuario = tipo;
    this.cadastroForm = this.criarFormulario(); // Recria o formulário corretamente ao mudar de tipo
    this.cadastroForm.patchValue({ tipoUsuario: tipo }); // 🔹 Atualiza tipoUsuario no formulário
  }

  fazerCadastro() {
    if (this.cadastroForm.invalid) {
      console.error('Todos os campos obrigatórios devem ser preenchidos corretamente!');
      return;
    }

    let usuario = {
      nome: this.cadastroForm.value.nome ?? '',
      email: this.cadastroForm.value.email ?? '',
      senha: this.cadastroForm.value.senha ?? '',
      cpf: this.cadastroForm.value.cpf ?? '',
      dataNascimento: this.cadastroForm.value.dataNascimento
        ? new Date(this.cadastroForm.value.dataNascimento).toISOString()
        : new Date().toISOString(),
      id: this.cadastroForm.value.id ?? 0,
      tipoUsuario: this.tipoUsuario // 🔹 Corrigido para garantir que `tipoUsuario` esteja presente
    };

    console.log(`Dados enviados para ${this.tipoUsuario}:`, usuario);

    this.cadastroService.cadastrarUsuario(usuario).subscribe({
      next: (res) => {
        console.log(`Cadastro de ${this.tipoUsuario} realizado com sucesso!`, res);
        this.mensagemSucesso = `Cadastro de ${this.tipoUsuario} realizado com sucesso!`;
        this.cadastroForm.reset();
        setTimeout(() => {
          this.mensagemSucesso = '';
        }, 3000);
      },
      error: (err) => {
        console.error(`Erro ao cadastrar ${this.tipoUsuario}:`, err);
      }
    });
  }
}