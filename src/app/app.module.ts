
import { ConversorService } from './service/conversor.service';
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

import { HistoricoComponent } from './historico/historico.component'; // historico de conversoes 

// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table'; //  table
import { MatMenuModule } from '@angular/material/menu'; //  menu
import { MatButtonModule } from '@angular/material/button'; // button
import { MatIconModule } from '@angular/material/icon'; // icons
import { MatInputModule } from '@angular/material/input'; //  input
import { MatSelectModule } from '@angular/material/select'; // select
import { MatSortModule } from '@angular/material/sort'; // Sort
import { MatDialogModule } from '@angular/material/dialog'; //  dialog
import { DataBrPipe } from './data.pipe'; // Filtro pipe para data BR




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    ContainerResultadoComponent,
    HistoricoComponent, //Historico Component declarado
    DataBrPipe // Filtro pipe para data BR

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // Angular mat Animations test
    MatMenuModule, // Angular mat modulo do menu
    MatButtonModule, // Angular mat modulo do button
    MatIconModule, // Angular mat icons
    MatTableModule, // Angular mat table
    MatInputModule, // Angular mat input
    MatSelectModule, // Angular mat select
    MatSortModule, // Angular mat sort
    MatDialogModule // Angular mat dialog




  ],
  providers: [MoedasService, Conversao, ConversorResposta, ConversorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
