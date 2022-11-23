import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { ArticulosComponent } from './articulos/articulos/articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClientesComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
