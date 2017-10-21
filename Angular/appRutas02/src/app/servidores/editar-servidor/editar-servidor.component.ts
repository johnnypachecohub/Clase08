import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServidoresService } from '../servidores.service';
import { Servidor } from '../servidor';

@Component({
  selector: 'app-editar-servidor',
  templateUrl: './editar-servidor.component.html',
  styleUrls: ['./editar-servidor.component.css']
})
export class EditarServidorComponent implements OnInit {

  id: number
  servidor: Servidor
  permitir: boolean
  fragmento: string = ''

  constructor(private servidoresService: ServidoresService, private rutaActiva: ActivatedRoute, private ruteador: Router) { 

  }

  ngOnInit() {
    // Leer Parámetros en la URL
    this.id = this.rutaActiva.snapshot.params.id
    this.servidor = this.servidoresService.detalle(this.id)

    this.rutaActiva.params
      .subscribe(
        (parametros: Params) => {
          this.id = parametros["id"]
          this.servidor = this.servidoresService.detalle(this.id)
        }
      )


    //Leer Parámetros de QueryString
    if(this.rutaActiva.snapshot.queryParams.permitir === 'true') {
      this.permitir = true;
    }
    else {
      this.permitir = false;
    }

    this.rutaActiva.queryParams
      .subscribe(
        (queryParams: Params) => {
          if(queryParams.permitir === 'true') {
            this.permitir = true;
          }
          else {
            this.permitir = false;
          }
        }
      )


    //Leer el Parámetro de Fragmento
    this.fragmento = this.rutaActiva.snapshot.fragment
    console.log('fragmento: ' + this.fragmento)

    this.rutaActiva.fragment
      .subscribe(
        fragmento => {
          this.fragmento = fragmento
          console.log('fragmento suscripcion: ' + this.fragmento)
        }
      )
  }

  grabar(f: NgForm) {
    this.servidoresService.grabar(this.servidor);

    this.ruteador.navigate(['servidores'])
  }

  editar(id: number) {
    this.ruteador.navigate(['servidores', 'editar', id], {queryParamsHandling: 'preserve'})
  }
}
