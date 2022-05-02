import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tokenreceiver',
  templateUrl: './tokenreceiver.component.html',
  styleUrls: ['./tokenreceiver.component.scss']
})
export class TokenreceiverComponent implements OnInit {
  token:string
  constructor() { }

  ngOnInit(): void {
    this.token="123"
    window.addEventListener('message', (data) => {
      this.receiveMessage(data);
   }, false);
  }


  receiveMessage(data){
    this.token=data.access_token;
  }
}
