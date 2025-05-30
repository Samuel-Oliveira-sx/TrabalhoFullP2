
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

interface Modalidade {
  nome?: string; // Tornado opcional para suportar planos
  tipo?: string; // Adicionado para diferenciar os planos
  imagem: string;
  descricao: string;
  exibirDescricao: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  modalidades: Modalidade[] = [
    { nome: 'Musculação', imagem: 'musculacao.jpg', descricao: 'Treino para ganho de força e resistência muscular.', exibirDescricao: false },
    { nome: 'Crossfit', imagem: 'crossfit.jpg', descricao: 'Exercícios funcionais de alta intensidade.', exibirDescricao: false },
    { nome: 'Artes Marciais', imagem: 'artes-marciais.jpg', descricao: 'Exercícios focados na postura e no fortalecimento do core.', exibirDescricao: false }
  ];

  professores: Modalidade[] = [
    { nome: 'Carlos', imagem: 'personal-man.jpg', descricao: 'Professor de musculação especializado.', exibirDescricao: false },
    { nome: 'Ana', imagem: 'personal-girl.jpg', descricao: 'Instrutora de Yoga e Pilates.', exibirDescricao: false }
  ];

  alimentacao: Modalidade[] = [
    { nome: 'Dieta Balanceada', imagem: 'dieta.jpg', descricao: 'Plano alimentar baseado em nutrientes essenciais.', exibirDescricao: false },
    { nome: 'Suplementos', imagem: 'suplementacao.jpg', descricao: 'Indicação de suplementos para ganho de massa muscular.', exibirDescricao: false }
  ];

  planos: Modalidade[] = [
    { tipo: 'Mensal', imagem: 'mensal.jpg', descricao: 'Plano de treinamento com pagamento mensal.', exibirDescricao: false },
    { tipo: 'Anual', imagem: 'anual.jpg', descricao: 'Plano completo com benefícios exclusivos.', exibirDescricao: false }
  ];

  irParaPerfil() {
    console.log('Redirecionando para o perfil...');
  }

  mostrarDescricao(modalidade: Modalidade) {
    modalidade.exibirDescricao = !modalidade.exibirDescricao;
  }
}