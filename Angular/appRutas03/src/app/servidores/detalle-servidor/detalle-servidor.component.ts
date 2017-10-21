import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Servidor } from '../servidor';
import { ServidoresService } from '../servidores.service';

@Component({
  selector: 'app-detalle-servidor',
  templateUrl: './detalle-servidor.component.html',
  styleUrls: ['./detalle-servidor.component.css']
})
export class DetalleServidorComponent implements OnInit {
  id: number
  servidor: Servidor

  constructor(private rutaActiva: ActivatedRoute, private servidoresService: ServidoresService, private ruteador: Router) { }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id
    this.servidor = this.servidoresService.detalle(this.id)

    //es un observador: si no lo colocamos, al cambiar la ruta con un boton no refresca la pagina
    this.rutaActiva.params
      .subscribe(
        (parametros: Params) => {
          this.id = parametros["id"]
          this.servidor = this.servidoresService.detalle(this.id)
        }
      )
  }

  cargar(id: number) {
    this.ruteador.navigate(['servidores', 'detalle', id])
  }

  editar() {
    this.ruteador.navigate(['servidores', 'editar', this.id], { queryParams: {permitir: false, eliminar: false}, fragment: 'autenticado' })
  }

}
