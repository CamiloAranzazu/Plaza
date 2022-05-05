import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

const defaultRedirect = '/admin/menu';

const routes: Routes = [
  { path: '', redirectTo: defaultRedirect, pathMatch: 'full'  },
  { path: '', component: MenuComponent},
  { path: '**', redirectTo: defaultRedirect, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
 