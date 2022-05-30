import { Component, OnInit } from '@angular/core';
import { AcercaDe } from 'src/app/interfaces';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  acercaDe: AcercaDe[] = [];
  acercaDeSelected: AcercaDe = null;

  constructor(private acercadeService: DatosService) { }

  ngOnInit(): void {

    this.acercadeService.getDataAcercaDe()
        .subscribe((res)=>{
          
            this.acercaDe = res
            console.log(this.acercaDe)
        })
  }

  onDelete(data:AcercaDe) {

    this.acercadeService.deleteDataAcercaDe(data)
      .subscribe((res)=>{

        this.acercaDe = this.acercaDe.filter(e => e.id !== data.id)
      })

  }

  starEdition(data:AcercaDe){

    this.acercaDeSelected = data;
    console.log(this.acercaDeSelected);
  }

  onUpdate(data:AcercaDe){

    if(!this.acercaDeSelected){
      return;
    }

    const index = this.acercaDe.findIndex(e => e.id === this.acercaDeSelected.id)
    
    this.acercaDe[index].nombre = this.acercaDeSelected.nombre;
    this.acercaDe[index].titulo = this.acercaDeSelected.titulo;
    this.acercaDe[index].parrafo = this.acercaDeSelected.parrafo;

    console.log(data)

    this.acercadeService.updateDataAcercaDe(data).subscribe();

    this.acercaDeSelected = null;
    
  }
}
