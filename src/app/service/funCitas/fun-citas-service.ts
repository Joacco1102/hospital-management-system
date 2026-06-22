import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Cita } from '../../model/cita';

@Injectable({
  providedIn: 'root',
})

export class FunCitasService {

  private apiUrl =
    'https://706feh7y28.execute-api.us-east-1.amazonaws.com';

  constructor(private http: HttpClient) { }

  verCitasUsuario(id: string) {
    return this.http.get<Cita[]>(`${this.apiUrl}/citas`);
  }

  crearCita(data: any) {

    return this.http.post<Cita>(
      `${this.apiUrl}/citas`,
      data
    );

  }

  eliminarCita(id: string) {

    return this.http.delete(
      `${this.apiUrl}/citas/${id}`
    );

  }

}