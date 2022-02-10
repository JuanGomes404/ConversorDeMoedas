import { Observable } from 'rxjs';
import { ConversorResposta } from './../container/container-resultado/conversor-resposta';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContainerResultadoService {
  resultadoConversao: number;
  moedaFrom: string;
  moedaTo: string;
  amount: number;
  rate!: number;
  date!: any;

  constructor(cvsResultado: ConversorResposta) {
    this.resultadoConversao = cvsResultado.resultadoConversao;
    this.moedaFrom = cvsResultado.moedaFrom;
    this.moedaTo = cvsResultado.moedaTo;
    this.date = cvsResultado.date;
    this.rate = cvsResultado.rate;
    this.amount = cvsResultado.amount;
  }

  organizarResultado(resultado: any) {
    this.resultadoConversao = resultado.result;
    this.moedaFrom = resultado.query.from;
    this.moedaTo = resultado.query.to;
    this.amount = resultado.query.amount;
    this.date = resultado.date;
    this.rate = resultado.info.rate;

    //console.log('Moeda TO: '+this.moedaTo)
    //console.log('Moeda From: '+this.moedaFrom)
    //console.log('Resultado: '+ resultado.result)
  }

  getMoedaDo(): string {
    return this.moedaFrom;
  }
  getResult(): number {
    return this.resultadoConversao;
  }

  getMoedaPara(): string {
    return this.moedaTo;
  }
}
