import { Injectable } from '@angular/core';

import { Servidor } from './servidor';

@Injectable()
export class ServidoresService {
  servidores: Array<Servidor> = [
    new Servidor(1, '72 familias, un balón', 'Usado para proyectos de Solgas', 'Web', 'Rackspace'),
    new Servidor(2, 'MegaPlaza', 'Web de MegaPlaza', 'Web', 'Rackspace'),
    new Servidor(3, 'Jigssaw', 'API Rest', 'Node', 'Heroku'),
    new Servidor(4, 'Perfumerías Unidas', 'Servidor Web de PU', 'Web Caché', 'Amazon')
  ]

  constructor() { }

  obtenerServidores(): Array<Servidor> {
    return this.servidores.slice()  //con slice: no se envia la referencia directa, si no la copia del mismo
  }

  grabar(servidor: Servidor) {
    this.servidores.forEach(item => {
      if(item.id == servidor.id) {
        item.id = servidor.id
        item.nombre = servidor.nombre
        item.descripcion = servidor.descripcion
        item.tipo = servidor.tipo
        item.ubicacion = servidor.ubicacion
      }
    })
  }

  detalle(id: number) {
    let servidor: Servidor

    this.servidores.forEach(item => {
      if(item.id == id) servidor = new Servidor(item.id, item.nombre, item.descripcion, item.tipo, item.ubicacion)
    })

    return servidor
  }

}
