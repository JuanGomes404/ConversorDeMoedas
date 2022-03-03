import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ContainerResultadoService } from 'src/app/service/container-resultado.service';
@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})

export class HistoricoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'data',
    'hora',
    'valor',
    'moedaFrom',
    'moedaTo',
    'resultado',
    'taxa',
  ]; // colunas da tabela

  dataSource = new MatTableDataSource(this._service.listaHistorico);

  @ViewChild(MatSort) sort!: MatSort;
  constructor(public _service: ContainerResultadoService) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    console.log(this.dataSource);
  }
}
