import { Component, OnInit, Injectable } from '@angular/core';

import { ContainerResultadoService } from 'src/app/service/container-resultado.service';
import { Historico } from './historico';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})
export class HistoricoComponent implements OnInit {
  displayedColumns: any[] = [
    'data',
    'hora',
    'valor',
    'moedaFrom',
    'moedaTo',
    'resultado',
    'taxa',
  ]; // colunas da tabela



  constructor(public _service: ContainerResultadoService) {
    //this.consultadoHistorico = _service.getHistorico();

  }
  historico = this._service.listaHistorico;


  ngOnInit(): void {
    console.log(this.historico);
  }
}
