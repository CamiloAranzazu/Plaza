import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const defaultRedirect = '/auth/login';

const routes: Routes = [
  { path: '', redirectTo: defaultRedirect, pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)} ,
  { path: '**', redirectTo: defaultRedirect, pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
