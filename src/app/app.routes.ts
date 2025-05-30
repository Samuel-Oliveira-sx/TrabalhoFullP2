
import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { CadastroComponent } from './Cadastro/cadastro.component';
import { HomeComponent } from './Home/home.component'; // Importação do HomeComponent

export const routes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'cadastro', component: CadastroComponent }, 
  { path: 'home', component: HomeComponent }, // Adicionando a rota Home
  { path: '**', redirectTo: '/login' } 
];