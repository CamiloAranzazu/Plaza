import { ComponentType } from '@angular/cdk/portal';
import { Injectable, TemplateRef } from '@angular/core';

import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppColor } from './utils.types';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private navHistory: string[] = [];

  constructor(
    private router: Router,
  ) { }

  openSnackBar(
    message: string,
    action: string = 'Ok',
    color?: AppColor
  ) {

  }

  public loadRouting(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
        this.navHistory = [...this.navHistory, urlAfterRedirects];
      });
  }

  public getNavHistory(): string[] {
    return this.navHistory;
  }

  public getNavPreviousUrl(): string {
    return this.navHistory[this.navHistory.length - 2] || '/';
  }

 

  prepareRoute(outlet: RouterOutlet) {
    return {
      value: outlet.activatedRoute.snapshot.params.index
    };
  }

  abort(
    message: string = 'Something has gone wrong',
    redirectTo: string = '',
    critical = true
  ) {
    this.openSnackBar(message, 'Ok', critical ? 'danger' : 'warning');
    this.router.navigateByUrl('');
  }
  public log(l: any) {
    // console.log(l);
  }


  // Calculo Digito de Verificaión
  calcularDigitoVerificacion(myNit) {
    let vpri, x, y, z;
    // Se limpia el Nit
    myNit = myNit.replace ( /\s/g, "" ) ; // Espacios
    myNit = myNit.replace ( /,/g,  "" ) ; // Comas
    myNit = myNit.replace ( /\./g, "" ) ; // Puntos
    myNit = myNit.replace ( /-/g,  "" ) ; // Guiones
    
    // Se valida el nit
    if  ( isNaN ( myNit ) )  {
      console.log ("El nit/cédula '" + myNit + "' no es válido(a).") ;
      return "" ;
    };
    // Procedimiento
    vpri = new Array(16) ; 
    z = myNit.length ;
    vpri[1]  =  3 ;
    vpri[2]  =  7 ;
    vpri[3]  = 13 ; 
    vpri[4]  = 17 ;
    vpri[5]  = 19 ;
    vpri[6]  = 23 ;
    vpri[7]  = 29 ;
    vpri[8]  = 37 ;
    vpri[9]  = 41 ;
    vpri[10] = 43 ;
    vpri[11] = 47 ;  
    vpri[12] = 53 ;  
    vpri[13] = 59 ; 
    vpri[14] = 67 ; 
    vpri[15] = 71 ;

    x = 0 ;
    y = 0 ;
    for  ( var i = 0; i < z; i++ )  { 
      y = ( myNit.substr (i, 1 ) ) ;
      // console.log ( y + "x" + vpri[z-i] + ":" ) ;
      x += ( y * vpri [z-i] ) ;
      // console.log ( x ) ;    
    }
    y = x % 11 ;
    // console.log ( y ) ; 
    return ( y > 1 ) ? 11 - y : y ;
  }

  calcularDigito(numNit): number {
    return this.calcularDigitoVerificacion(numNit);
  }


}
