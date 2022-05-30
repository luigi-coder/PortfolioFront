import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/interfaces';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion:Educacion[] = []
  disabled : boolean = true;
  titulo?: string;
  parrafo?: string;
  educacionSelected: Educacion = null;

  constructor(private educacionService: DatosService) { }

  ngOnInit(): void {

    this.educacionService.getDataEducacion()
        .subscribe(res => {
          console.log(res)
          this.educacion = res;
          
        })
  }

  onDelete(data: Educacion){

    
    this.educacionService.deleteDataEducation(data)
      .subscribe(res => {
        
        this.educacion = this.educacion.filter(datito => datito.id !== data.id);
      })
  }

  starEdition(data:Educacion){

    this.educacionSelected = data;

  }

  onUpdate(data:Educacion){

    if(!this.educacionSelected){
      return;
    }

    const index = this.educacion.findIndex(e => e.id === this.educacionSelected.id)

    if(index === -1) {
      return;
    }    

    this.educacion[index].titulo = this.educacionSelected.titulo;
    this.educacion[index].parrafo = this.educacionSelected.parrafo;

    this.educacionService.updateDataEducation(data).subscribe();

    this.educacionSelected = null;
  }
}
