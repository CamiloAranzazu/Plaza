import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HistoricoComponent } from './components/historico/historico.component';
import { InventarioEntradaComponent } from './components/inventario-entrada/inventario-entrada.component';
import { InventarioSalidaComponent } from './components/inventario-salida/inventario-salida.component';


@NgModule({
  declarations: [InventarioComponent, InventarioEntradaComponent, ProductosComponent, HistoricoComponent, InventarioSalidaComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class InventarioModule { }
