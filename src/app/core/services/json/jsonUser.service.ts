import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class JsonUserList {
  constructor() {}
  userList = [
    {name: 'juanito', rol: 'admin', date: ''},
    {name: 'mauro', rol: 'admin', date: ''},
    {name: 'hermes', rol: 'planch', date: ''},
    {name: 'olimak', rol: 'superadmin', date: ''}
  ];

}