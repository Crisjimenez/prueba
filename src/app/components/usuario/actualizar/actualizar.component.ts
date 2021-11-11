import { Component, Inject, OnInit } from '@angular/core';
import { IUsuario } from '../../../models/usuario.model';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {

  usuario: IUsuario;

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IUsuario
  ) {
    this.form = this.formBuilder.group({
      id: new FormControl(''),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
    });
    this.usuario = data;
   }

  ngOnInit(): void {
    console.log(this.data);
    if(this.data) {
      this.usuario = this.data;
      this.form.get('email')?.setValue(this.usuario.email);
    }
    
  }

  crear() {

  }

  cancelar(){
    
  }
}
