import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonUserList } from 'src/app/core/services/json/jsonUser.service';
import { NotiService } from 'src/app/core/services/utils/noti.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  production:boolean = environment.production;

  form: FormGroup;
  
  ngOnInit(): void {
    
  }

  constructor(private fb: FormBuilder, private router: Router, private jsonUserList: JsonUserList, private notiService: NotiService) {
    this.form = this.fb.group({
      value: new FormControl('',Validators.required)
    });
  }

  go() {
    if(this.form.status === 'VALID') {
      let data = this.jsonUserList.userList.find(user => user.name.toLowerCase() === this.form.get('value').value.toLowerCase());
      if(data !== undefined) {
        localStorage.setItem("userPlaza", JSON.stringify(data)); 
        this.router.navigate(['/admin/menu']);
      } else {
        this.notiService.openSnackBar('VERIFIQUE INFORMACION INGRESADA!', 'X', 4000);
      }
    } else {
      this.notiService.openSnackBar('VERIFIQUE INFORMACION INGRESADA!', 'X', 4000);
    }
  }

  
}
