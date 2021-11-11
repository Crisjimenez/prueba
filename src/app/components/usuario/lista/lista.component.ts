import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CrearComponent } from '../crear/crear.component';
import { ActualizarComponent } from '../actualizar/actualizar.component';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public listado: IUsuario[] = [];
  public form: FormGroup;
  displayedColumns: string[] = ['usuario', 'email', 'nombres', 'apellidos', 'acciones'];

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { 
    this.form = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      usuario: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.consultarListaUsuarios();
  }

  consultarListaUsuarios(){
    this.usuarioService.consultarUsuarios()
      .subscribe(arg => {
        this.listado = arg;
      }, error =>{
        console.log(error);
      });
    
  }

  verUsuario(){

  }

  actualizarUsuario(usuario: IUsuario){
    this.dialog.open(ActualizarComponent, {
      data: {
      usuario
      },
      });
  }

  crearUsuario(){
    this.dialog.open(CrearComponent, {
      
      });
  }

  buscar(){

  }

}
