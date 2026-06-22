import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root',
})

export class FunUsuarioService {

  private apiUrl =
    'https://706feh7y28.execute-api.us-east-1.amazonaws.com';

  constructor(private http: HttpClient) { }

  obtenerUsuario(id: string) {
    return this.http.get<Usuario>(
      `${this.apiUrl}/usuarios/${id}`
    );
  }

  actualizarUsuario(
    id: string,
    data: any
  ) {
    return this.http.put<Usuario>(
      `${this.apiUrl}/usuarios/${id}`,
      data
    );
  }
  
  crearUsuario(data: Partial<Usuario>) {
    return this.http.post<Usuario>(
      `${this.apiUrl}/usuarios`,
      data
    );
  }
  
  eliminarUsuario(id: string) {
    return this.http.delete<void>(
      `${this.apiUrl}/usuarios/${id}`
    );
  }
}