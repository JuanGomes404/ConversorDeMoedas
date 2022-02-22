import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  position: number;
  date: string;
  hour: string;
  moedaFrom: string;
  moedaTo: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, date: '10/02/2022', hour: '14:00', moedaFrom: 'BRL', moedaTo: 'USD' },
  { position: 2, date: '10/02/2022', hour: '14:00', moedaFrom: 'BRL', moedaTo: 'USD' },
  { position: 3, date: '10/02/2022', hour: '14:01', moedaFrom: 'BRL', moedaTo: 'USD' },
  { position: 4, date: '10/02/2022', hour: '14:01', moedaFrom: 'BRL', moedaTo: 'USD' },
];

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})


export class HistoricoComponent {

  displayedColumns: string[] = ['position', 'date', 'hour', 'moedaFrom', 'moedaTo'];
  dataSource = ELEMENT_DATA;
}
