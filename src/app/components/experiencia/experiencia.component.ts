import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/interfaces';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[] = [];
  experienciaSelected:Experiencia = null;

  constructor(private experienciaService: DatosService) { }

  ngOnInit(): void {

    this.experienciaService.getDataExperiencia()
        .subscribe(res => {
          console.log(res)
          this.experiencia = res
        })
  }

  onDelete(data:Experiencia){

    this.experienciaService.deleteDataExperiencia(data)
    .subscribe(res => {

      this.experiencia = this.experiencia.filter(e => e.id !== data.id);
    })
  }

  startEdition(data:Experiencia) {

    this.experienciaSelected = data;
  }

  onUpdate(data:Experiencia) {

    if(!this.experienciaSelected){
      return;
    }

    const index = this.experiencia.findIndex(e=>e.id === this.experienciaSelected.id);

    if(index === -1) {
      return;
    }   

    this.experiencia[index].titulo = this.experienciaSelected.titulo;
    this.experiencia[index].parrafo = this.experienciaSelected.parrafo;

    this.experienciaService.updateDataExperiencia(data).subscribe();

    this.experienciaSelected = null;

  }
}
