import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AcercaComponent } from './acerca/acerca.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';


import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { KnobModule } from "primeng/knob";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from 'primeng/inputtext';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PortfolioDinamicoComponent } from './portfolio-dinamico/portfolio-dinamico.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { PortfolioEstaticoComponent } from './portfolio-estatico/portfolio-estatico.component';




@NgModule({
  declarations: [
    HeaderComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    PortfolioDinamicoComponent,
    PortfolioEstaticoComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserAnimationsModule,
    SidebarModule,
    CardModule,
    KnobModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    PortfolioDinamicoComponent
    
  ]
})
export class ModuloComponentesModule { }
