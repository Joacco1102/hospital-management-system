import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FunCitasService } from '../../../service/funCitas/fun-citas-service';
import { Cita } from '../../../model/cita';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-mis-citas',
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './mis-citas.html',
  styleUrl: './mis-citas.css',
})
export class MisCitas implements OnInit {

  citas: Cita[] = [];
  cargando = true;
  tabActiva: 'proximas' | 'historial' = 'proximas';

  constructor(private citasService: FunCitasService) { }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.citasService.verCitasUsuario(userId).subscribe({
        next: (res: Cita[]) => {
          this.citas = res.filter(c => c.idUsuario === userId);
          this.cargando = false;
        },
        error: () => {
          this.cargando = false;
        }
      });
    } else {
      this.cargando = false;
    }
  }

  get citasProximas() {
    const hoy = new Date().toISOString().split('T')[0];
    return this.citas.filter(c => c.fecha >= hoy && c.estado === 'pendiente');
  }

  get citasHistorial() {
    const hoy = new Date().toISOString().split('T')[0];
    return this.citas.filter(c => c.fecha < hoy || c.estado !== 'pendiente');
  }

  cambiarTab(tab: 'proximas' | 'historial') {
    this.tabActiva = tab;
  }

  cancelarCita(id: string) {
    if (!confirm('¿Seguro que deseas cancelar esta cita?')) return;
    this.citasService.eliminarCita(id).subscribe({
      next: () => {
        this.citas = this.citas.filter(c => c.idCita !== id);
        alert('Cita cancelada correctamente');
      },
      error: () => alert('Error al cancelar la cita')
    });
  }
}