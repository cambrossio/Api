import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm:FormGroup
  constructor( private fb:FormBuilder
    ) { 
        this.myForm=this.fb.group({
            correo:["", [Validators.required]] ,
            nombre:["", [Validators.required]] ,
            apellido:["", [Validators.required]] ,
            password:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
  
        })
  
    }
  
    registrarse(){
  
    }

  ngOnInit(): void {
  }

}
