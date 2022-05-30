import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/interfaces';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
    
  arraySkills: Skills[] = [];
  arraySkillsSelected: Skills = null;

  constructor(private skillsService: DatosService) { }

  ngOnInit(): void {

    this.skillsService.getDataSkills()
      .subscribe(res => {
        
        this.arraySkills = res;
  
    })
  }

  onDelete(data:Skills){

    this.skillsService.deleteDataSkills(data)
      .subscribe(res => {

        this.arraySkills = this.arraySkills.filter(sk => sk.id !== data.id)

      });
  }

  starEdition(data:Skills){

    this.arraySkillsSelected = data;
  }

  onUpdate(data:Skills) {

    if(!this.arraySkillsSelected){

      return;
    }

    const index = this.arraySkills.findIndex(sk => sk.id === data.id)

    this.arraySkills[index].nombre = this.arraySkillsSelected.nombre;
    this.arraySkills[index].porcentaje = this.arraySkillsSelected.porcentaje;

    this.skillsService.updateDataSkills(data).subscribe();

    this.arraySkillsSelected = null;
  }

}
