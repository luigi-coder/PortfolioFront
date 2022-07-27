import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url="https://secret-peak-06594.herokuapp.com/auth/login";

  currentUserSubject: BehaviorSubject<any>

  constructor(private http: HttpClient) { 
    
    console.log("El servicio de autenticacion se ha creado");

    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser')||'{}'));
  }

  iniciarSesionService(credenciales:any):Observable<any> {
    return this.http.post<any>(this.url, credenciales).pipe(map(data=>{
      
      sessionStorage.setItem('currentUser', JSON.stringify(data));

      this.currentUserSubject.next(data);
    
      return data;
    }))
  }
}
