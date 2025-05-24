import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AlunosComponent } from './app/alunos/alunos.component';
import { AgendamentosComponent } from './app/agendamentos/agendamentos.component';
import { CadastroComponent } from './app/Cadastro/cadastro.component'; 
import { LoginComponent } from './app/Login/login.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'cadastro', component: CadastroComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'agendamentos', component: AgendamentosComponent },
  { path: '**', redirectTo: '/login' } 
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes) 
  ]
}).catch(err => console.error(err));