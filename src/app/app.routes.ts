import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ConsultarComponent } from './consultar/consultar.component';

export const routes: Routes = [
{path:"menu", title:"menu",component:MenuComponent},
{path:"login", title:"login",component:LoginComponent},
{path:"",redirectTo:'/login',pathMatch:'full'},
{path:"home",title:"home",component:HomeComponent},

{path:"registrar",title:"home",component:RegistrarComponent},

{path:"consultar",title:"home",component:ConsultarComponent},

];

