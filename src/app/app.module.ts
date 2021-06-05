import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { FormComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import {alertComponent} from './components/alert/alert.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ComentarioComponent,
    FormComponent,
    alertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
