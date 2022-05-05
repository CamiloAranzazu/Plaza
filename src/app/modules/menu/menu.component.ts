import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: any[] = [
    {nombre: 'Inventario de', url: '/admin/inventario/inventario-entrada', img: './assets/imgs/entrada.png', description: 'Podras registrar productos de entrada', entrada: true},
    {nombre: 'Inventario de', url: '/admin/inventario/inventario-salida', img: './assets/imgs/salida.png', description: 'Podras registrar productos de salida', entrada: false},
    {nombre: 'Historico', url: '/admin/inventario/historico', img: './assets/imgs/historico.png', description: 'Podras ver el historial de inventario'},
    {nombre: 'Productos', url: '/admin/inventario/productos', img: './assets/imgs/product.png', description: 'Podras configurar tus productos'},
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  go(url) {
    this.router.navigate([url]);   
  }

  clearSesion() {
    localStorage.removeItem('userPlaza');
    this.router.navigateByUrl('/auth/login');
  }


}
