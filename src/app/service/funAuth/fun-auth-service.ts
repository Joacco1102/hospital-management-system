import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root',
})

export class FunAuthService {

  private apiUrl =
    'https://706feh7y28.execute-api.us-east-1.amazonaws.com';

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, data);
  }

  register(data: any) {
    return this.http.post<Usuario>(`${this.apiUrl}/auth/register`, data);
  }

}