import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl ='https://localhost:7190/swagger/index.html'; 

  constructor(private http: HttpClient) {}

  getDados() {
    return this.http.get(this.apiUrl);
  }

  postDados(novoDado: any) {
    return this.http.post(this.apiUrl, novoDado);
  }
}