import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/usuario/lista/lista.component';
import { CrearComponent } from './components/usuario/crear/crear.component';
import { ActualizarComponent } from './components/usuario/actualizar/actualizar.component';
import { VisualizarComponent } from './components/usuario/visualizar/visualizar.component';

const routes: Routes = [
  {path: '', redirectTo: '/usuario', pathMatch: 'full'},
  {path: 'usuario', component: ListaComponent},
  {path: 'crear-usuario', component: CrearComponent},
  {path: 'actualizar-usuario', component: ActualizarComponent},
  {path: 'visualizar-usuario', component: VisualizarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
