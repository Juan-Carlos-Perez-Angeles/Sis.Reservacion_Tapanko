import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import { ReservacionComponent } from './reservacion/reservacion.component';
import { RegistroComponent } from './registro/registro.component';
import { AdministracionComponent } from './administracion/administracion.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReservacionComponent,
    RegistroComponent,
    AdministracionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
