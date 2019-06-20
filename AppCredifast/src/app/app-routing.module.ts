import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioVisitadorComponent } from './inicio-visitador/inicio-visitador.component';
import { RegistrarVisitaComponent } from './registrar-visita/registrar-visita.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { RegistroSunatComponent } from './registro-sunat/registro-sunat.component';
import { RegistroSunarpComponent } from './registro-sunarp/registro-sunarp.component';
import { RegistroMontoComponent } from './registro-monto/registro-monto.component';
import { InicioAdministradorComponent } from './inicio-administrador/inicio-administrador.component';

const routes: Routes = [
  { path: "homevisitador", component: InicioVisitadorComponent },
  { path: "registrarvisita", component: RegistrarVisitaComponent },
  { path: "cambiarcontrasena", component: CambiarContrasenaComponent },
  { path: "registrosunat", component: RegistroSunatComponent },
  { path: "registrosunarp", component: RegistroSunarpComponent },
  { path: "registromonto", component: RegistroMontoComponent },
  { path: "homeadministrador", component: InicioAdministradorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
