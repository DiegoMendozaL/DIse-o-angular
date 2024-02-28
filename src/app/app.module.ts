import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { EfectoComponent } from './efecto/efecto.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EfectosComponent } from './efectos/efectos.component';
import { FooterComponent } from './footer/footer.component';
import { NuevoComponent } from './nuevo/nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TarjetasComponent,
    EfectoComponent,
    EmpresasComponent,
    EfectosComponent,
    FooterComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
