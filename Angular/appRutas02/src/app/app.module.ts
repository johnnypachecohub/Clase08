import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListadoComponent } from './servidores/listado/listado.component';
import { ListadoAreasComponent } from './areas/listado/listado.component';
import { HomeComponent } from './home/home.component';

import { ServidoresService} from './servidores/servidores.service';
import { SeguridadService } from './auth/seguridad.service';
import { SeguridadGuard } from './auth/auth-seguridad.guards';

import { DetalleServidorComponent } from './servidores/detalle-servidor/detalle-servidor.component';
import { EditarServidorComponent } from './servidores/editar-servidor/editar-servidor.component';

const rutas: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'servidores', component: ListadoComponent, canActivate: [SeguridadGuard] },
  { path: 'servidores/detalle/:id', component: DetalleServidorComponent, canActivate: [SeguridadGuard] },
  { path: 'servidores/editar/:id', component: EditarServidorComponent, canActivate: [SeguridadGuard] },
  { path: 'areas', component: ListadoAreasComponent },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListadoComponent,
    ListadoAreasComponent,
    HomeComponent,
    DetalleServidorComponent,
    EditarServidorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [ServidoresService, SeguridadService, SeguridadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
