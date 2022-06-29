import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioDinamicoComponent } from './components/portfolio-dinamico/portfolio-dinamico.component';
import { PortfolioEstaticoComponent } from './components/portfolio-estatico/portfolio-estatico.component';


const routes: Routes = [

  {
    path: 'portfolio-dinamico',
    component: PortfolioDinamicoComponent
  },  
  {
    path: 'portfolio-estatico',
    component: PortfolioEstaticoComponent
  },
  {
    path: 'iniciar-sesion',
    component: HeaderComponent
  },
  {
    path: '',
    redirectTo: '/iniciar-sesion',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }