import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private urlBase = 'http://localhost:3000/usuario'

  constructor(private http: HttpClient)  { }

  consultarUsuarios(page: number): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(`${this.urlBase}?_limit=10&_page=${page}`);
  }

  crearUsuarios(usuario: IUsuario): Observable<IUsuario[]> {
    return this.http.post<IUsuario[]>(this.urlBase, usuario);
  }

  actualizarUsuarios(usuario: IUsuario): Observable<IUsuario[]> {
    return this.http.put<IUsuario[]>(`${this.urlBase}/${usuario.id}`, usuario);
  }

  consultarUsuario(usuario: IUsuario): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.urlBase);
  }
}
