import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe, Educacion, Experiencia, Proyectos, Skills } from 'src/app/interfaces';
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
  
  apiUrlAcercaDe: string = "http://localhost:8080";
  //apiUrlAcercaDe: string = environment.baseUrl + '/acercaDe';
  apiUrlExperiencia: string = environment.baseUrl + '/experiencia';
  apiUrlEducacion: string = environment.baseUrl + '/educacion';
  apiUrlSkills: string = environment.baseUrl + '/skills';
  apiUrlProyectos: string = environment.baseUrl + '/proyectos';
  

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

    const url = `${this.apiUrlAcercaDe}/${datos.id}`;
    return this.http.delete<AcercaDe>(url)
  }


  /* Experiencia ... */

  getDataExperiencia(): Observable<Experiencia[]> {

    return this.http.get<Experiencia[]>(this.apiUrlExperiencia);

  }

  deleteDataExperiencia(datos:Experiencia): Observable<Experiencia> {

    const url = `${this.apiUrlExperiencia}/${datos.id}`
    return this.http.delete<Experiencia>(url);
  }

  updateDataExperiencia(datos:Experiencia):Observable<Experiencia> {

    const url = `${this.apiUrlExperiencia}/${datos.id}`
    return this.http.put<Experiencia>(url, datos);
  }

  /* Educacion ... */
  getDataEducacion(): Observable<Educacion[]> {

    return this.http.get<Educacion[]>(this.apiUrlEducacion);

  }

  deleteDataEducation(datos:Educacion):Observable<Educacion> {

    const url = `${this.apiUrlEducacion}/${datos.id}`;
    return this.http.delete<Educacion>(url)
  } 

  updateDataEducation(datos:Educacion):Observable<Educacion> {

    const url = `${this.apiUrlEducacion}/${datos.id}`;
    return this.http.put<Educacion>(url, datos)
  }

  /* Skills ...*/
  getDataSkills():Observable<Skills[]> {

    return this.http.get<Skills[]>(this.apiUrlSkills);
  }

  deleteDataSkills(datos:Skills):Observable<Skills> {

    const url = `${this.apiUrlSkills}/${datos.id}`
    return this.http.delete<Skills>(url)

  }

  updateDataSkills(datos:Skills):Observable<Skills> {

    const url = `${this.apiUrlSkills}/${datos.id}`

    return this.http.put<Skills>(url, JSON.stringify(datos))
  }

  getDataProyectos(): Observable<Proyectos[]> {

    return this.http.get<Proyectos[]>(this.apiUrlProyectos);

  }

}
