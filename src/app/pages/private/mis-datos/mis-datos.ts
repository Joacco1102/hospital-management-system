import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FunUsuarioService } from '../../../service/funUsuario/fun-usuario-service';
import { Usuario } from '../../../model/usuario';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-mis-datos',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './mis-datos.html',
  styleUrl: './mis-datos.css',
})
export class MisDatos implements OnInit {

  usuario: Usuario | null = null;
  cargando = true;
  editando = false;
  guardando = false;

  editForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    celular: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    direccion: new FormControl('', Validators.required),
  });

  get correo() { return this.editForm.get('correo'); }
  get celular() { return this.editForm.get('celular'); }
  get direccion() { return this.editForm.get('direccion'); }

  constructor(
    private usuarioService: FunUsuarioService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.usuarioService.obtenerUsuario(userId).subscribe({
        next: (res: Usuario) => {
          this.usuario = res;
          this.cargando = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.cargando = false;
          this.cdr.detectChanges();
          alert('Error al cargar los datos del usuario');
        }
      });
    } else {
      this.cargando = false;
      this.cdr.detectChanges();
    }
  }

  abrirEdicion() {
    this.editForm.patchValue({
      correo: this.usuario?.correo,
      celular: this.usuario?.celular,
      direccion: this.usuario?.direccion,
    });
    this.editando = true;
  }

  cancelarEdicion() {
    this.editando = false;
  }

  guardar() {
    if (this.editForm.valid) {
      this.guardando = true;
      const userId = localStorage.getItem('userId')!;

      this.usuarioService.actualizarUsuario(userId, this.editForm.value).subscribe({
        next: (res: any) => {
          this.usuario = res;
          this.guardando = false;
          this.editando = false;
          this.cdr.detectChanges();
          alert('Datos actualizados correctamente');
          this.router.navigate(['/portal/mis-datos']);

        },
        error: () => {
          this.guardando = false;
          alert('Error al actualizar los datos');
        }
      });
    } else {
      this.editForm.markAllAsTouched();
    }
  }
}