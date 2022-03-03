import { Historico } from './../historico/historico';
import { ContainerResultadoService } from 'src/app/service/container-resultado.service';
import { MoedasService } from './../service/moedas.service';
import { Conversao } from './conversao';

import { Component, Input, OnInit } from '@angular/core';
import { ConversorService } from '../service/conversor.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

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
    private cntResultadoService: ContainerResultadoService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.cvs.valor = 0;
  }
 openDialog(){
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
 }

  converter() {
    if (
      this.cvs.valor! < 0 ||
      this.cvs.valor! === 0 ||
      isNaN(this.cvs.valor!)
    ) {
      alert('Insira somente números não-negativos e maiores que zero :)');
      this.cvs.resetValue();
    } else {


      this.service.converteMoeda(this.cvs).subscribe((result: any) => {
        //console.log('API RODANDO! :)');
        //console.log(result)


        this.cntResultadoService.organizarResultado(result);

        let dadosConversao = {
          data: this.cntResultadoService.date,
          hora: this.cntResultadoService.getActualHour(),
          valor: this.cntResultadoService.amount,
          moedaFrom: this.cntResultadoService.moedaFrom,
          moedaTo: this.cntResultadoService.moedaTo,
          resultado: this.cntResultadoService.resultadoConversao,
          taxa: this.cntResultadoService.rate
        };

        this.cntResultadoService.adcionar(dadosConversao);
        this.router.navigate(['result']);
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
