import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnChanges,
} from '@angular/core';
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
    this.atualizarExclusao();
  }
  ngOnInit(): void {}
  atualizarExclusao() {
    if (this._service.verificaStatusExcluir() === true) {
      this._service.listaHistorico = this._service.listaHistorico.filter(
        (element, index) => index < this._service.listaHistorico.length - 1
      );
      this.dataSource = new MatTableDataSource(this._service.listaHistorico);
      console.log('passou aqui hein');
      this._service.returnNormal();
    } else {
      return;
    }
  }
}
