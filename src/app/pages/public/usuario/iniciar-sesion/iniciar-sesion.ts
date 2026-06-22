import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { FunAuthService } from '../../../../service/funAuth/fun-auth-service';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.css',
})
export class IniciarSesion {

  private router = inject(Router);
  private authService = inject(FunAuthService);

  loginForm = new FormGroup({
    tipoDocumento: new FormControl('DNI', Validators.required),
    nroDocumento: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(8)]),
    recordar: new FormControl(false)
  });

  get nroDocumento() { return this.loginForm.get('nroDocumento'); }
  get contrasena() { return this.loginForm.get('contrasena'); }

  mostrarPassword = false;
  cargando = false;  // ← faltaba esto

  ingresar() {
    if (this.loginForm.valid) {
      this.cargando = true;

      const formValue = this.loginForm.value;

      const payload = {
        tipo_documento: formValue.tipoDocumento,
        valor_documento: formValue.nroDocumento,
        password: formValue.contrasena,
      };

      this.authService.login(payload).subscribe({
        next: (res: any) => {
          this.cargando = false;
          localStorage.setItem('userId', res.userId);
          localStorage.setItem('nombre', res.nombre_completo);
          alert(`¡Bienvenido, ${res.nombre_completo}!`);
          this.router.navigate(['/portal']);
        },
        error: (err: any) => {
          this.cargando = false;
          const mensaje = err?.error?.message || 'Error al iniciar sesión.';
          alert(mensaje);
        }
      });

    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}