import { Component, OnInit } from '@angular/core';
import { AcercaDe, Educacion, Experiencia, Proyectos, Skills } from '../../interfaces';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-portfolio-estatico',
  templateUrl: './portfolio-estatico.component.html',
  styleUrls: ['./portfolio-estatico.component.css']
})
export class PortfolioEstaticoComponent implements OnInit {

  acercaDe: AcercaDe[] = [];
  experiencia: Experiencia[] = [];
  educacion:Educacion[] = [];
  arraySkills: Skills[] = [];
  proyectos: Proyectos[] = [];

  constructor(private acercadeService: DatosService) { }

  ngOnInit(): void {

    this.acercadeService.getDataAcercaDe()
        .subscribe((res)=>{
          
            this.acercaDe = res
            console.log("contruyendo");
            console.log(this.acercaDe)
        })

    this.acercadeService.getDataExperiencia()
        .subscribe((res)=>{
            
              this.experiencia = res
              console.log("contruyendo");
              console.log(this.experiencia)
        })

    this.acercadeService.getDataEducacion()
        .subscribe((res)=>{
              
                this.educacion = res
                console.log("contruyendo");
                console.log(this.educacion)
        })

    this.acercadeService.getDataSkills()
        .subscribe((res)=>{
                
                  this.arraySkills = res
                  console.log("contruyendo");
                  console.log(this.arraySkills)
        })

    this.acercadeService.getDataProyectos()
        .subscribe(res=>{
    
        this.proyectos = res;
    })
  }

}
