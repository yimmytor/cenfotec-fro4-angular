import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../principal/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('../principal/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('../principal/nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path: 'equipo',
    loadChildren: () => import('../principal/equipo/equipo.module').then(m => m.EquipoModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('../principal/servicios/servicios.module').then(m => m.ServiciosModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('../principal/recursos/recursos.module').then(m => m.RecursosModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('../principal/contacto/contacto.module').then(m => m.ContactoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
