import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioVisitadorComponent } from './inicio-visitador/inicio-visitador.component';
import { RegistrarVisitaComponent } from './registrar-visita/registrar-visita.component';

const routes: Routes = [
  { path: "homevisitador", component: InicioVisitadorComponent },
  { path: "registrarvisita", component: RegistrarVisitaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
