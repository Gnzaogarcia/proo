import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegistrarComponent } from '../registrar/registrar.component';
import { ConsultarComponent } from '../consultar/consultar.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [LoginComponent,RouterLink, HomeComponent, RegistrarComponent,ConsultarComponent],
  
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
