import { ConversorResposta } from './container/container-resultado/conversor-resposta';
import { ContainerResultadoService } from 'src/app/service/container-resultado.service';
import { MoedasService } from './service/moedas.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { ContainerComponent } from './container/container.component';
import { ContainerResultadoComponent } from './container/container-resultado/container-resultado.component';
import { FormsModule } from '@angular/forms';
import { Conversao } from './container/conversao';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    ContainerResultadoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [MoedasService, Conversao, ConversorResposta],
  bootstrap: [AppComponent]
})
export class AppModule { }
