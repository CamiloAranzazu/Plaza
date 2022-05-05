import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from '../../../../core/services/utils/modal.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  flagEdit: boolean = false;  

  form: FormGroup;

  products: any[] = [
    {name: 'PANES', medida: 1, cantidad: 6},
    {name: 'PAPAS SALADITAS', medida: 1, cantidad: 6},
    {name: 'GASEOSA', medida: 2, cantidad: 6},
    {name: 'PANES', medida: 1, cantidad: 6},
    {name: 'PAPAS SALADITAS', medida: 1, cantidad: 6},
    {name: 'GASEOSA', medida: 2, cantidad: 6},
    {name: 'PANES', medida: 1, cantidad: 6},
    {name: 'PAPAS SALADITAS', medida: 1, cantidad: 6},
    {name: 'GASEOSA', medida: 2, cantidad: 6},
    {name: 'PANES', medida: 1, cantidad: 6},

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
    });
  }

  close() {
    this.flagEdit = false;
  }

}
