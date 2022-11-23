import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes/clientes.component';
import { ArticulosComponent } from './articulos/articulos/articulos.component';

const routes: Routes = [
  {
    path: '', component: ClientesComponent
  },
  {
    path: 'articulos', component: ArticulosComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
