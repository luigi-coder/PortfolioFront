import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe, Educacion, Experiencia, Login, Proyectos, Skills } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

const httpOptions = {
  header: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  apiUrlAcercaDe: string = "https://secret-peak-06594.herokuapp.com/auth";
  //apiUrlAcercaDe: string = environment.baseUrl + '/acercaDe';
  apiUrlExperiencia: string = "https://secret-peak-06594.herokuapp.com/auth";
  //apiUrlExperiencia: string = environment.baseUrl + '/experiencia';
  apiUrlEducacion: string = "https://secret-peak-06594.herokuapp.com/auth";
  //apiUrlEducacion: string = environment.baseUrl + '/educacion';
  apiUrlSkills: string = "https://secret-peak-06594.herokuapp.com/auth";
  //apiUrlSkills: string = environment.baseUrl + '/skills';
  apiUrlProyectos: string = "https://secret-peak-06594.herokuapp.com/auth";
  //apiUrlProyectos: string = environment.baseUrl + '/proyectos';

  constructor(private http: HttpClient) { }


  /* Acerca de ... */

  getDataAcercaDe(): Observable<AcercaDe[]> {

    const url = `${this.apiUrlAcercaDe}/acercade/get`
    return this.http.get<AcercaDe[]>(url);

  }

  updateDataAcercaDe(datos:AcercaDe): Observable<AcercaDe> {

    const url = `${this.apiUrlAcercaDe}/acercade/update/${datos.id}`;
    return this.http.put<AcercaDe>(url,datos);

  }

  deleteDataAcercaDe(datos:AcercaDe): Observable<AcercaDe> {

    const url = `${this.apiUrlAcercaDe}/acercade/delete/${datos.id}`;
    return this.http.delete<AcercaDe>(url)
  }


  /* Experiencia ... */

  getDataExperiencia(): Observable<Experiencia[]> {

    const url = `${this.apiUrlExperiencia}/experiencia/get`
    return this.http.get<Experiencia[]>(url);

  }

  deleteDataExperiencia(datos:Experiencia): Observable<Experiencia> {

    const url = `${this.apiUrlExperiencia}/experiencia/delete/${datos.id}`
    return this.http.delete<Experiencia>(url);
  }

  updateDataExperiencia(datos:Experiencia):Observable<Experiencia> {

    const url = `${this.apiUrlExperiencia}/experiencia/update/${datos.id}`
    return this.http.put<Experiencia>(url, datos);
  }

  /* Educacion ... */
  getDataEducacion(): Observable<Educacion[]> {

    const url = `${this.apiUrlEducacion}/educacion/get`
    return this.http.get<Educacion[]>(url);

  }

  deleteDataEducation(datos:Educacion):Observable<Educacion> {

    const url = `${this.apiUrlEducacion}/educacion/delete/${datos.id}`;
    return this.http.delete<Educacion>(url)
  } 

  updateDataEducation(datos:Educacion):Observable<Educacion> {

    const url = `${this.apiUrlEducacion}/educacion/update/${datos.id}`;
    return this.http.put<Educacion>(url, datos)
  }

  /* Skills ...*/
  getDataSkills():Observable<Skills[]> {

    const url = `${this.apiUrlSkills}/skill/get`
    return this.http.get<Skills[]>(url);
  }

  deleteDataSkills(datos:Skills):Observable<Skills> {

    const url = `${this.apiUrlSkills}/skill/delete/${datos.id}`
    return this.http.delete<Skills>(url)

  }

  updateDataSkills(datos:Skills):Observable<Skills> {

    const url = `${this.apiUrlSkills}/skill/update/${datos.id}`

    return this.http.put<Skills>(url, datos)
  }

  getDataProyectos(): Observable<Proyectos[]> {

    const url = `${this.apiUrlProyectos}/proyectos/get`
    return this.http.get<Proyectos[]>(url);

  }

  deleteDataProyectos(datos:Proyectos):Observable<Proyectos> {

    const url = `${this.apiUrlSkills}/proyecto/delete/${datos.id}`
    return this.http.delete<Proyectos>(url)

  }

  updateDataProyectos(datos:Proyectos):Observable<Proyectos> {

    const url = `${this.apiUrlSkills}/proyectos/update/${datos.id}`

    return this.http.put<Proyectos>(url, datos)
  }

}

