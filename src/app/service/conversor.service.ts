import { Conversao } from './../container/conversao';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConversorService {
  selectedOptionMoedaAtual: string = '';
  selectedOptionMoedaConverter = '';
  valor = 0;
  params:any;

  constructor(private http: HttpClient) {}

  API = 'https://api.exchangerate.host/convert?';

  converteMoeda(conversao: Conversao) {
     this.params = this.http.get<Object>(
      this.API +
        `from=${conversao.selectedOptionMoedaAtual}&to=${conversao.selectedOptionMoedaConverter}&amount=${conversao.valor}`
    );
    return this.params;
  }
}
