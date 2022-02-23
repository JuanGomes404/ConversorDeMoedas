import { ContainerResultadoService } from 'src/app/service/container-resultado.service';
import { MoedasService } from './../service/moedas.service';
import { Conversao } from './conversao';

import { Component, Input, OnInit } from '@angular/core';
import { ConversorService } from '../service/conversor.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-container-conversor',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  @Input() listaMoedas = this.moedasService.getListaMoedas();

  constructor(
    private service: ConversorService,
    public cvs: Conversao,
    private router: Router,
    private moedasService: MoedasService,
    private cntResultadoService: ContainerResultadoService
  ) {}

  ngOnInit() {}

  converter() {
    if (this.cvs.valor! < 0 || this.cvs.valor! === 0 || isNaN(this.cvs.valor!)) {
      alert('Insira somente números não-negativos e maiores que zero :)');
      this.cvs.resetValue();
    }

    else {
      this.router.navigate(['result']);
      this.service.converteMoeda(this.cvs).subscribe((result: any) => {
        //console.log('API RODANDO! :)');
        //console.log(result)
        this.cntResultadoService.organizarResultado(result);
      });
    }
  }

  /*teste(){
      console.log(this.valor);
      console.log(this.selectedOptionMoedaAtual);
      console.log(this.selectedOptionMoedaConverter);
   }
 */
}
