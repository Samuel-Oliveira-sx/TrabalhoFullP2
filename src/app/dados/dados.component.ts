
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})

export class DadosComponent {
  dados: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDados().subscribe(response => {
      if (Array.isArray(response)) {
        this.dados = response;
      } else {
        console.error('Erro: resposta esperada como array, recebido:', response);
      }
    });
  }
}