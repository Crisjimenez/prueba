import { Component, Inject, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/models/usuario.model';
import { IData } from '../../../models/data.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {
  
  usuario: IUsuario;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IData) {
    this.usuario = data.usuario;
   }

  ngOnInit(): void {
  }

}
