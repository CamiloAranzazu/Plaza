import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { InventarioEntradaComponent } from './components/inventario-entrada/inventario-entrada.component';
import { InventarioSalidaComponent } from './components/inventario-salida/inventario-salida.component';

const defaultRedirect = '/admin/inventario-list';

const routes: Routes = [
  {
    path: '',
    component: InventarioComponent,
    children: [
        { path: 'inventario-entrada', component: InventarioEntradaComponent },
        { path: 'inventario-salida', component: InventarioSalidaComponent },
        { path: 'productos', component: ProductosComponent },
        { path: 'historico', component: HistoricoComponent },
    ]
  },
  { path: '**', redirectTo: defaultRedirect }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
