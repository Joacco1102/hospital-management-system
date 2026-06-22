import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { FunAuthService } from '../../../../service/funAuth/fun-auth-service';

@Component({
  selector: 'app-registrarme',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './registrarme.html',
  styleUrl: './registrarme.css',
})
export class Registrarme {

  constructor(
    private authService: FunAuthService,
    private router: Router
  ) { }

  registroForm = new FormGroup({
    tipoDocumento: new FormControl('', Validators.required),
    nroDocumento: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    nombreCompleto: new FormControl('', Validators.required),
    fechaNacimiento: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    direccion: new FormControl('', Validators.required),
    celular: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  get tipoDocumento() { return this.registroForm.get('tipoDocumento'); }
  get nroDocumento() { return this.registroForm.get('nroDocumento'); }
  get fechaNacimiento() { return this.registroForm.get('fechaNacimiento'); }
  get nombreCompleto() { return this.registroForm.get('nombreCompleto'); }
  get correo() { return this.registroForm.get('correo'); }
  get direccion() { return this.registroForm.get('direccion'); }
  get celular() { return this.registroForm.get('celular'); }
  get contrasena() { return this.registroForm.get('contrasena'); }

  mostrarPassword = false;
  cargando = false;

  registrar() {
    if (this.registroForm.valid) {
      this.cargando = true;

      const formValue = this.registroForm.value;

      const payload = {
        action: 'register', 
        tipo_documento: formValue.tipoDocumento,
        valor_documento: formValue.nroDocumento,
        nombre_completo: formValue.nombreCompleto,
        fecha_nacimiento: formValue.fechaNacimiento,
        correo: formValue.correo,
        direccion: formValue.direccion,
        celular: formValue.celular,
        password: formValue.contrasena,
      };

      this.authService.register(payload).subscribe({
        next: (res: any) => {
          this.cargando = false;
          alert('¡Cuenta creada exitosamente!');
          this.registroForm.reset();
          this.router.navigate(['/usuario/iniciar-sesion']);
        },
        error: (err: any) => {
          this.cargando = false;
          const mensaje = err?.error?.message || 'Error al registrar. Intenta nuevamente.';
          alert(mensaje);
        }
      });

    } else {
      this.registroForm.markAllAsTouched();
    }
  }
}