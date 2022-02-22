import { AppComponent } from './../../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public app: AppComponent) {
      app.title = 'Conversor de Moedas'
   }




}
