import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  formInicioSesion: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private autenticacionService: AutenticacionService,
    private router: Router){

      this.formInicioSesion = this.formBuilder.group({
        userName: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

  ngOnInit(): void {}

  iniciarSesion(){

    this.autenticacionService.iniciarSesionService(this.formInicioSesion.value)
    .subscribe(
      data => {
        console.log("DATA: " + JSON.stringify(data));
        this.router.navigate(['/portfolio-dinamico']);
      }
    )
  }

  portfolioEstatico(){
    this.router.navigate(['/portfolio-estatico']);
  }

  mensajeError(campo:string){
    
    return this.formInicioSesion.controls[campo].errors && this.formInicioSesion.controls[campo].touched;
  }

  
}

