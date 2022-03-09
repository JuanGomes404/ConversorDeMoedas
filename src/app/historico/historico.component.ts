import { MatDialog } from '@angular/material/dialog';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ContainerResultadoService } from 'src/app/service/container-resultado.service';
import { Historico } from './historico';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

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
    'excluir'
  ]; // colunas da tabela

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: MatTable<Historico>;
  dataSource = new MatTableDataSource(this._service.listaHistorico);
  constructor(
    public _service: ContainerResultadoService,
    private changeDetectorRef: ChangeDetectorRef,
    private matDialog: MatDialog
  ) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  openDialog(id) {
    const dialogRef = this.matDialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._service.excluirConversao(id);
        this.refresh();
      }
    });
  }
  refresh() {
    // console.log(this._service.getList());
    this._service.getList().subscribe((listaHistorico: Historico[]) => {
      this.dataSource = new MatTableDataSource(listaHistorico);
      console.log(listaHistorico);
      this.changeDetectorRef.detectChanges();
      this.dataSource.sort = this.sort;

    });
    this.table.renderRows();
    // console.log(this.dataSource);
  }
  ngOnInit(): void {
    this.refresh();
  }
}
