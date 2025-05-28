
import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { CadastroComponent } from './Cadastro/cadastro.component';

export const routes: Routes = [ // Alterado de "appRoutes" para "routes"
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'cadastro', component: CadastroComponent }, 
  { path: '**', redirectTo: '/login' } 
];