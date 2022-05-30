import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/interfaces';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyectos[] = [];
  

  constructor(private proyectosService: DatosService) { }

  ngOnInit(): void {

    this.proyectosService.getDataProyectos()
      .subscribe(res=>{
  
        this.proyectos = res;
      })
  }

}
