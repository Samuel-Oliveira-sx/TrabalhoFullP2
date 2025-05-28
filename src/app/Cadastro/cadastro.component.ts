
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação necessária para *ngIf
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http'; // Adicionado para suporte a requisições HTTP
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
    CommonModule // Adicionado para corrigir o erro do *ngIf
  ],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  tipoUsuario: string = '';
  mensagemSucesso: string = ''; // Variável para exibir mensagem de sucesso

  cadastroForm = new FormGroup({
    nome: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    senha: new FormControl<string>('', Validators.required),
    cpf: new FormControl<string>('', Validators.required),
    dataNascimento: new FormControl<string>('', Validators.required),
    id: new FormControl<number>(0)
  });

  constructor(private cadastroService: CadastroService) {}

  selecionarUsuario(tipo: string) {
    this.tipoUsuario = tipo;
  }

  fazerCadastro() {
    if (this.cadastroForm.invalid) {
      console.error('Todos os campos obrigatórios devem ser preenchidos corretamente!');
      return;
    }

    // Capturando os valores reais do formulário e garantindo que não sejam nulos
    let aluno = {
      nome: this.cadastroForm.value.nome ?? '',
      email: this.cadastroForm.value.email ?? '',
      senha: this.cadastroForm.value.senha ?? '',
      cpf: this.cadastroForm.value.cpf ?? '',
      dataNascimento: this.cadastroForm.value.dataNascimento 
        ? new Date(this.cadastroForm.value.dataNascimento).toISOString() 
        : new Date().toISOString(),
      id: this.cadastroForm.value.id ?? 0
    };

    console.log('Dados enviados:', aluno); // Adicionado para depuração

    this.cadastroService.cadastrarUsuario(aluno).subscribe({
      next: (res) => {
        console.log('Cadastro realizado com sucesso!', res);

        // Exibir mensagem de sucesso
        this.mensagemSucesso = 'Cadastro realizado!!';

        // Resetar o formulário após o cadastro
        this.cadastroForm.reset();

        // Limpar a mensagem após alguns segundos
        setTimeout(() => {
          this.mensagemSucesso = '';
        }, 3000); // Mensagem desaparece após 3 segundos
      },
      error: (err) => {
        console.error('Erro ao cadastrar:', err);
        console.error('Detalhes do erro:', err.message);
      }
    });
  }
}