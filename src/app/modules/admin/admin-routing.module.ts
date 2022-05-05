import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InventarioModule } from '../inventario/inventario.module';
import { MenuModule } from '../menu/menu.module';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'menu', loadChildren: () =>  MenuModule},
      { path: 'inventario', loadChildren: () =>  InventarioModule},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
