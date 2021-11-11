import { Component, Inject, OnInit } from '@angular/core';
import { IUsuario } from '../../../models/usuario.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IData } from '../../../models/data.model';
import { UsuarioService } from '../../../services/usuario.service';

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
    @Inject(MAT_DIALOG_DATA) public data: IData,
    private usuarioService: UsuarioService
  ) {
    this.form = this.formBuilder.group({
      id: new FormControl(''),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required),
    });
    this.usuario = data.usuario;
  }

  ngOnInit(): void {
    console.log(this.data);
    if (this.data) {
      this.usuario = this.data.usuario;
      this.form.patchValue(this.usuario)
      // this.form.get('email')?.setValue(this.usuario.email);
    }

  }

  crear() {
    if (this.form.valid) {
      this.usuario.nombre = this.form.get('nombre')?.value;
      this.usuario.estado = this.form.get('estado')?.value;
      this.usuario.email = this.form.get('email')?.value;
      this.usuario.apellidos = this.form.get('apellidos')?.value;
      this.usuario.usuario = this.form.get('usuario')?.value;

      this.usuarioService.actualizarUsuarios(this.usuario)
        .subscribe(data => {
          console.log(data);
        }, error => console.log(error));
    }

  }

  cancelar() {

  }
}
