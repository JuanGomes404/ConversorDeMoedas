import { ConversorResposta } from './../container/container-resultado/conversor-resposta';
import { Injectable } from "@angular/core"
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root",
})

export class ContainerResultadoService{

   resultadoConversao: number;
   moedaFrom: string;
   moedaTo: string;
   amount!: number;
   rate!: number;
   date!: any;

  constructor( cvsResultado: ConversorResposta){
      this.resultadoConversao = cvsResultado.resultadoConversao;
      this.moedaFrom = cvsResultado.moedaFrom;
      this.moedaTo = cvsResultado.moedaTo;
      this.date = cvsResultado.date;
      this.rate = cvsResultado.rate;
      this.amount = cvsResultado.amount;
  }

  organizarResultado(resultado: any){



      this.resultadoConversao = resultado.result;
     // console.log('Resultado: '+this.resultadoConversao)

      this.moedaFrom = resultado.query.from;
      //console.log('Moeda From: '+this.moedaFrom)

      this.moedaTo = resultado.query.to;
     // console.log('Moeda TO: '+this.moedaTo)

     this.amount = resultado.query.amount;

     this.date = resultado.date;
     this.rate = resultado.info.rate;


  }

  get moedaDo(): string{
    return this.moedaFrom;
  }
  get result(): number{
    return this.resultadoConversao;
  }

  get moedaPara(): string{
    return this.moedaTo;
  }

}

