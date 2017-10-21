import { Component, OnInit } from '@angular/core';
import { ServidoresService } from '../servidores.service';
import { Servidor } from '../servidor';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
  //providers: [ServidoresService]  esta en el app.module
})
export class ListadoComponent implements OnInit {

  servidores: Array<Servidor>

  constructor(private servidorServicio: ServidoresService, private ruteador: Router, private rutaActiva: ActivatedRoute) {

  }

  ngOnInit() {
    this.servidores = this.servidorServicio.obtenerServidores()
  }

  mostrarDetalle(id: number) {
    //this.ruteador.navigate(['servidores', 'detalle', id])  //hemos creado la ruta: servidores/detalle/2
    this.ruteador.navigate(['detalle', id], {relativeTo: this.rutaActiva})
  }

}
