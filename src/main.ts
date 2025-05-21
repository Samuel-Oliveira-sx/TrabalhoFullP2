
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AlunosComponent } from './app/alunos/alunos.component';
import { AgendamentosComponent } from './app/agendamentos/agendamentos.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
   { path: 'alunos', component: AlunosComponent },
  { path: 'agendamentos', component: AgendamentosComponent }

  
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));