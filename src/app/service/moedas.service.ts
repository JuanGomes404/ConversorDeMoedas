import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MoedasService {
  private listaMoedas = [];
  public connectAPI(){
    this.connectMoedasAPI();
  }
  constructor(private http: HttpClient) {}
  private connectMoedasAPI() {
    let requestURL = 'https://api.exchangerate.host/symbols';

    this.http.get<Object>(requestURL).subscribe((res) =>{
       //this.listaMoedas.push(res);
       console.log(res)
       this.organizarResultado(res);
    })

  }
  organizarResultado(res){
    let obj = res.symbols;
    Object.keys(obj).forEach(key => {
      this.listaMoedas.push(obj[key]);
    })
  }
  public getListaMoedas() {
    return this.listaMoedas;
  }
}
