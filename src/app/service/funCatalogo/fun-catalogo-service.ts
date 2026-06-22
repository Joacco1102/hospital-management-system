import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FunCatalogoService {

  private apiUrl = 'https://706feh7y28.execute-api.us-east-1.amazonaws.com';

  constructor(private http: HttpClient) { }

  obtenerMedicos() {
    return this.http.get<any[]>(
      `${this.apiUrl}/catalogos/medicos`
    );
  }

  obtenerMedicosPorEspecialidad(especialidad: string) {
    return this.http.get<any[]>(
      `${this.apiUrl}/catalogos/medicos?especialidad=${especialidad}`
    );
  }

}