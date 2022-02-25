import { Component, OnInit } from '@angular/core';

import { ContainerResultadoService } from 'src/app/service/container-resultado.service';

import { MatTableDataSource } from '@angular/material/table';

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

  constructor(public _service: ContainerResultadoService) {}

  historico = this._service.listaHistorico;
  dataSource = new MatTableDataSource(this.historico);


  ngOnInit(): void {
    console.log(this.historico);
  }

}
