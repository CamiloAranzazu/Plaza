import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/utils/modal.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-inventario-entrada',
  templateUrl: './inventario-entrada.component.html',
  styleUrls: ['./inventario-entrada.component.scss']
})
export class InventarioEntradaComponent implements OnInit {
  flagEdit: boolean = false;  

  form: FormGroup;

  valuesSelectedCantidad: any[] = []

  products: any[] = [
    {name: 'CHUZOS DE CERDO', medida: 0, cantidadFinal: 0, cantidadDeEntrada: 0, sumatoriaCantidadEntrada: 0},
    {name: 'HAMBUERGUESA TRADICIONAL', medida: 0, cantidadFinal: 0, cantidadDeEntrada: 0, sumatoriaCantidadEntrada: 0},
    {name: 'FILETE DE POLLO', medida: 0, cantidadFinal: 0, cantidadDeEntrada: 0, sumatoriaCantidadEntrada: 0},

  ]

  constructor(private router: Router, private fb: FormBuilder, private modalService: ModalService) {
    this.form = this.fb.group({
      name: new FormControl('',Validators.required),
      medida: new FormControl(0,Validators.required),
      cantidadDeEntrada: new FormControl(0,Validators.required),
    });
   }

  ngOnInit(): void {
    for (let index = -100; index <= 500; index++) {
      this.valuesSelectedCantidad.push(index);
    }
    this.valuesSelectedCantidad.reverse();
  }

  atras() {
    this.router.navigate(['/admin/menu']);
  }

  getMedidaProducto(value): string {
    let a = '';
    if(value === 0) {
      a = 'Unidad'
    } else if(value === 1) {
      a = 'Paquete'
    }else if(value === 2) {
      a = 'Paca'
    }
    return a;
  }

  changeValue(e, pro) {
    this.products.forEach(x => {
      if(x.name === pro.name) {
        x.cantidadDeEntrada = e;
        x.sumatoriaCantidadEntrada = e + x.cantidadFinal
      }
    }); 
  }

  save() {
    this.modalService.openDialogConfirm('Esta seguro de guardar la entrada?').afterClosed().subscribe(rest=> {
      if(rest !== false) {
        let model = {
          Date: new Date(),
          Inventario: this.products
        }
        this.Guardar(JSON.stringify(model), './assets/bd/inventario.txt');
      }
    });
  }


  Guardar(contenido, url) {

    let blob = new Blob([contenido], { type: "text/plain;charset=utf-8" });
    // let fd = FormData();
    // fd.append('File', blob);
    // var archivoTxt= new XMLHttpRequest();
    // archivoTxt.open("POST",url);
    // archivoTxt.send(fd);


    // var archivoTxt= new XMLHttpRequest();
    // archivoTxt.open("GET",fileRuta, false);
    // archivoTxt.send (null);
    // var txt=archivoTxt.responseText;
    // console.log(txt);

    
    

    
}


  editar(product) {
    this.flagEdit = true;
    this.form.get('name').setValue(product.name);
    this.form.get('medida').setValue(product.medida.toString());
  }

  delete(index){
    this.modalService.openDialogConfirm('Esta seguro de eliminarlo?').afterClosed().subscribe(rest=> {
      if(rest !== false) {
        this.products.splice(index, 1);
      }
    })
    
  }

  close() {
    this.flagEdit = false;
  }
}
