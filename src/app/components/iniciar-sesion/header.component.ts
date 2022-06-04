import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interfaces';
import { DatosService } from '../services/datos.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  form: FormGroup;
  login: Login = null; 

  constructor(private formBuilder: FormBuilder, private loginService: DatosService) {
    
    this.form = this.formBuilder.group({
      
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(){

  }
  
  iniciarSesion(){
    
    // Crear un objeto con login
    this.login = {
      userName: this.form.controls['email'].value,
      password: this.form.controls['password'].value
    }
   
  }

  mensajeError(campo:string){
    
    return this.form.controls[campo].errors && this.form.controls[campo].touched;
  }
}

