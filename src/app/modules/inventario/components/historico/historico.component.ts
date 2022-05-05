import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  atras() {
    this.router.navigate(['/admin/menu']);
  }

}
