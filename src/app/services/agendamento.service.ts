
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private apiUrl = 'https://localhost:7190/swagger/index.html';


  constructor(private http: HttpClient) {}

  getAgendamentos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}