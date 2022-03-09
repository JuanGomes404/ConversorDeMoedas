import { ConversorResposta } from '../container-resultado/conversor-resposta';
import { Injectable } from '@angular/core';
import { Historico } from '../historico/historico';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
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
  needReset: boolean = false;

  listaHistorico: Historico[] = [];
  constructor(cvsResultado: ConversorResposta) {
    this.resultadoConversao = cvsResultado.resultadoConversao;
    this.moedaFrom = cvsResultado.moedaFrom;
    this.moedaTo = cvsResultado.moedaTo;
    this.date = cvsResultado.date;
    this.rate = cvsResultado.rate;
    this.amount = cvsResultado.amount;
  }

  organizarResultado(resultado: any) {
    this.moedaFrom = resultado.query.from;
    this.moedaTo = resultado.query.to;
    this.amount = resultado.query.amount;
    this.date = resultado.date;
    this.rate = resultado.info.rate;
    this.resultadoConversao = resultado.result;
  }
  adcionar(objResultado: any) {
    this.listaHistorico.push(objResultado);
  }

  excluirConversao(id) {
    for (let i = 0; i < this.listaHistorico.length; i++) {
      let obj = this.listaHistorico[i];
      if ((obj.id = id)) {
          //retira o obj do array
          this.listaHistorico.splice(--i, 1);
        break;
      }
    }

    console.log(this.listaHistorico);
  }
  getList() {
    return of(this.listaHistorico);
  }
  getActualHour(): string {
    let date = new Date();
    let horaNum = date.getHours();
    let minNum = date.getMinutes();

    let hora = horaNum.toString();
    let min = minNum.toString();

    let horaCompleta!: string;
    if (this.amount > 0) {
      if (horaNum < 10) {
        hora = '0' + hora;
      }
      if (minNum < 10) {
        min = '0' + min;
      }

      horaCompleta = hora + ':' + min;
    }
    if (this.amount < 0) {
      horaCompleta = '';
    }
    return horaCompleta;
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
