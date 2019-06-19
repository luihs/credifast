import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioVisitadorComponent } from './inicio-visitador/inicio-visitador.component';
import { RegistrarVisitaComponent } from './registrar-visita/registrar-visita.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { RegistroSunatComponent } from './registro-sunat/registro-sunat.component';
import { RegistroSunarpComponent } from './registro-sunarp/registro-sunarp.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioVisitadorComponent,
    RegistrarVisitaComponent,
    CambiarContrasenaComponent,
    RegistroSunatComponent,
    RegistroSunarpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
