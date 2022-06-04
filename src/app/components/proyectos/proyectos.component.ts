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
  proyectosSelected: Proyectos = null;

  constructor(private proyectosService: DatosService) { }

  ngOnInit(): void {

    this.proyectosService.getDataProyectos()
      .subscribe(res=>{
  
        this.proyectos = res;
      })
  }

  onDelete(data:Proyectos){

    this.proyectosService.deleteDataProyectos(data)
      .subscribe(res => {

        this.proyectos = this.proyectos.filter(proyecto => proyecto.id !== data.id)

      });
  }

  starEdition(data:Proyectos){

    this.proyectosSelected = data;
  }

  onUpdate(data:Proyectos) {

    if(!this.proyectosSelected){

      return;
    }

    const index = this.proyectos.findIndex(proyecto => proyecto.id === data.id)

    this.proyectos[index].nombre = this.proyectosSelected.nombre;
    this.proyectos[index].url = this.proyectosSelected.url;

    this.proyectosService.updateDataProyectos(data).subscribe();

    this.proyectosSelected = null;
  }

}
