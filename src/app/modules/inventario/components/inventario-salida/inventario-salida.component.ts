import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/utils/modal.service';

@Component({
  selector: 'app-inventario-salida',
  templateUrl: './inventario-salida.component.html',
  styleUrls: ['./inventario-salida.component.scss']
})
export class InventarioSalidaComponent implements OnInit {
  flagEdit: boolean = false;  

  form: FormGroup;

  valuesSelectedCantidad: any[] = [
    {value: 10},
    {value: 9},
    {value: 8},
    {value: 7},
    {value: 6},
    {value: 5},
    {value: 4},
    {value: 3},
    {value: 2},
    {value: 1},
    {value: 0},
    {value: -1},
    {value: -2},
    {value: -3},
    {value: -4},
    {value: -5},
    {value: -6},
    {value: -7},
    {value: -8},
    {value: -9},
    {value: -10}
  ]

  products: any[] = [
    {name: 'CHUZOS DE CERDO', medida: 0, cantidadFinal: 0, cantidadDeEntrada: 0, sumatoriaCantidadEntrada: 0},

  ]

  constructor(private router: Router, private fb: FormBuilder, private modalService: ModalService) {
    this.form = this.fb.group({
      name: new FormControl('',Validators.required),
      medida: new FormControl(0,Validators.required),
    });
   }

  ngOnInit(): void {
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

  save() {
    if(this.form.status === 'VALID') {
      let data = this.products.find(x => x.name.toUpperCase() === this.form.get('name').value.toUpperCase());
      if(data !== undefined) {
        this.products.forEach(x => {
          if(x.name.toUpperCase() === this.form.get('name').value.toUpperCase()) {
            x.medida =  parseInt(this.form.get('medida').value)
          }
        });
      } else {
        this.products.push({
          name: this.form.get('name').value,
          medida: parseInt(this.form.get('medida').value),
          cantidad: 0
        });
      }
      this.flagEdit = false;
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
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
