import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  usuario: IUsuario = {
    id: 0, nombre: '', apellidos: '', usuario: '', estado: '',
    email: ''
  };
  estadoList: string[] = ['Activo', 'Inactivo'];

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.form = this.formBuilder.group({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      apellidos: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
      estado: new FormControl('', Validators.required),
      usuario: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    });

   }

  ngOnInit(): void {
  }

  crear() {
    if (this.form.valid) {
      this.usuario.nombre = this.form.get('nombre')?.value;
      this.usuario.estado = this.form.get('estado')?.value;
      this.usuario.email = this.form.get('email')?.value;
      this.usuario.apellidos = this.form.get('apellidos')?.value;
      this.usuario.usuario = this.form.get('usuario')?.value;

      this.usuarioService.crearUsuarios(this.usuario)
        .subscribe(data => {
          console.log(data);
        }, error => console.log(error));
    }
  }

  cancelar(){
    
  }

}
