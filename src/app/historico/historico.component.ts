import { Component, OnInit } from '@angular/core';

import { ContainerResultadoService } from 'src/app/service/container-resultado.service';



  export interface historico {
    data: string;
    hora: string;
    valor: number;
    moedaFrom: string;
    moedaTo: string;
    resultado: number;
    taxa: number;
  }

  const  ELEMENT_DATA: historico[] = [ 
    {data: '', hora: "13:00", valor: 1, moedaFrom: '', moedaTo: '', resultado: 2, taxa: 3} // Array onde os dados devem ser armazenados.
  ];

  @Component({
    selector: 'app-historico',
    templateUrl: './historico.component.html',
    styleUrls: ['./historico.component.css']
  })

  export class HistoricoComponent implements OnInit {
    displayedColumns: any[] = ['data','hora','valor','moedaFrom', 'moedaTo', 'resultado', 'taxa']; // colunas da tabela
    historico = ELEMENT_DATA;
  

    constructor(public _service:ContainerResultadoService){ // Consulta os dados no ResultadoService
    
    }

    ngOnInit(): void {
  }


  
  
}