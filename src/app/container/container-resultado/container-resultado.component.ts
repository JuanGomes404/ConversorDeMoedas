

import { ContainerResultadoService } from 'src/app/service/container-resultado.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-container-resultado',
  templateUrl: './container-resultado.component.html',
  styleUrls: ['./container-resultado.component.css']
})
export class ContainerResultadoComponent implements OnInit {


  constructor(public _service:ContainerResultadoService){}

  ngOnInit(): void {}
}
