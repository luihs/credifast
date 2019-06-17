import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioVisitadorComponent } from './inicio-visitador/inicio-visitador.component';

const routes: Routes = [
  { path: "homevisitador", component: InicioVisitadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
