import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CrearComponent } from '../crear/crear.component';
import { ActualizarComponent } from '../actualizar/actualizar.component';
import { VisualizarComponent } from '../visualizar/visualizar.component';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  private listadoCompleta: IUsuario[] = [];
  public listado: IUsuario[] = [];
  public form: FormGroup;
  displayedColumns: string[] = ['usuario', 'email', 'nombre', 'apellidos', 'acciones'];
  
  //Paginado
  length = 500;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { 
    this.form = this.formBuilder.group({
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      email: new FormControl(''),
      usuario: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.consultarListaUsuarios();
  }

  eventoPaginado(event: PageEvent){
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.consultarListaUsuarios();
    console.log(this.length);
    console.log(this.pageSize);
    console.log(this.pageIndex);
  }

  consultarListaUsuarios(){
    this.usuarioService.consultarUsuarios(this.pageIndex++)
      .subscribe(arg => {
        this.listado = arg;
      }, error =>{
        console.log(error);
      });
    
  }

  verUsuario(usuario: IUsuario){
    this.dialog.open(VisualizarComponent, {
      data: {
      usuario
      },
      });
  }

  actualizarUsuario(usuario: IUsuario){
    this.dialog.open(ActualizarComponent, {
      data: {
      usuario
      },
      });
  }

  crearUsuario(){
    this.dialog.open(CrearComponent, {});
  }

  buscar(){

  }

}
