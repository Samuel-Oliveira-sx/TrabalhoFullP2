
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; 
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule, 
    RouterOutlet, 
    MatCardModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonToggleModule,
    
    
  ]
})
export class AppComponent {
  title = 'FrontP2';
  nomeAcademia: string = 'Minha Academia';
  globalTitle: string = 'Bem-vindo à Minha Academia';  

  setGlobalTitle(title: string) {
    this.globalTitle = title;
  }
}