import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { FunCitasService } from '../../../../service/funCitas/fun-citas-service';
import { FunCatalogoService } from '../../../../service/funCatalogo/fun-catalogo-service';

@Component({
  selector: 'app-cita-virtual',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './cita-virtual.html',
  styleUrl: './cita-virtual.css',
})
export class CitaVirtual implements OnInit {

  especialidades: string[] = [];
  medicos: any[] = [];
  medicosFiltrados: any[] = [];
  cargando = false;

  citaForm = new FormGroup({
    especialidad: new FormControl('', Validators.required),
    medico: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    motivo: new FormControl(''),
    seguro: new FormControl('sis', Validators.required),
  });

  constructor(
    private citasService: FunCitasService,
    private catalogoService: FunCatalogoService,
    private router: Router
  ) { }

  get especialidad() { return this.citaForm.get('especialidad'); }
  get medico() { return this.citaForm.get('medico'); }
  get fecha() { return this.citaForm.get('fecha'); }
  get hora() { return this.citaForm.get('hora'); }

  ngOnInit() {
    this.cargarMedicos();
    this.citaForm.get('especialidad')?.valueChanges.subscribe(value => {
      this.filtrarMedicos(value || '');
      this.citaForm.patchValue({ medico: '' });
    });
  }

  cargarMedicos() {
    this.catalogoService.obtenerMedicos().subscribe({
      next: (res) => {
        this.medicos = res;
        this.medicosFiltrados = [];
        this.especialidades = [...new Set(res.map((m: any) => m.especialidad))];
      },
      error: (err) => console.error(err)
    });
  }

  filtrarMedicos(especialidad: string) {
    if (!especialidad) {
      this.medicosFiltrados = this.medicos;
      return;
    }
    this.medicosFiltrados = this.medicos.filter(m => m.especialidad === especialidad);
  }

  confirmar() {
    if (this.citaForm.invalid) {
      this.citaForm.markAllAsTouched();
      return;
    }

    this.cargando = true;

    const payload = {
      id: localStorage.getItem('userId'),
      modalidad: 'virtual',
      especialidad: this.citaForm.value.especialidad,
      medico: this.citaForm.value.medico,
      fecha: this.citaForm.value.fecha,
      hora: this.citaForm.value.hora,
      motivo: this.citaForm.value.motivo,
      seguro: this.citaForm.value.seguro
    };

    this.citasService.crearCita(payload).subscribe({
      next: () => {
        this.cargando = false;
        alert('Cita virtual registrada correctamente');
        this.router.navigate(['/portal/mis-citas']);
      },
      error: (err) => {
        console.error(err);
        this.cargando = false;
        alert('Error al registrar la cita');
      }
    });
  }
}