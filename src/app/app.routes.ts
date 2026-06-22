import { Routes } from '@angular/router';
import { Public } from './layout/public/public';
import { Index } from './pages/public/index';
import { Private } from './layout/private/private';
import { Index as IndexPrivate } from './pages/private/index';
import { Nosotros } from './pages/public/nosotros/nosotros';
import { Teleconsultas } from './pages/public/teleconsultas/teleconsultas';
import { Especialidades } from './pages/public/especialidades/especialidades';
import { IniciarSesion } from './pages/public/usuario/iniciar-sesion/iniciar-sesion';
import { Registrarme } from './pages/public/usuario/registrarme/registrarme';
import { MisCitas } from './pages/private/mis-citas/mis-citas';
import { MisDatos } from './pages/private/mis-datos/mis-datos';
import { AgendarCita } from './pages/private/agendar-cita/agendar-cita';
import { CitaPresencial } from './pages/private/agendar-cita/cita-presencial/cita-presencial';
import { CitaVirtual } from './pages/private/agendar-cita/cita-virtual/cita-virtual';

export const routes: Routes = [

    {
        path: '',
        component: Public,
        children: [
            { path: 'index', component: Index },
            { path: 'nosotros', component: Nosotros },
            { path: 'teleconsultas', component: Teleconsultas },
            { path: 'especialidades', component: Especialidades },
            { path: '', redirectTo: 'index', pathMatch: 'full' }
        ]
    },

    { path: 'usuario/iniciar-sesion', component: IniciarSesion },
    { path: 'usuario/registrarme', component: Registrarme },

    {
        path: 'portal',
        component: Private,
        children: [
            { path: 'index', component: IndexPrivate },
            { path: 'mis-citas', component: MisCitas },
            { path: 'mis-datos', component: MisDatos },
            { path: 'agendar-cita', component: AgendarCita },
            { path: 'cita-presencial', component: CitaPresencial },
            { path: 'cita-virtual', component: CitaVirtual },
            { path: '', redirectTo: 'index', pathMatch: 'full' }
        ]
    }

];