import { ConversorResposta } from './../container-resultado/conversor-resposta';
import { MoedasService } from './../../service/moedas.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ConversorService } from 'src/app/service/conversor.service';
import { Conversao } from '../conversao';
import { ContainerComponent } from './../container.component';

describe(ContainerComponent.name, () => {
  let fixture: ComponentFixture<ContainerComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerComponent],
      imports: [RouterTestingModule],
      providers: [
        ConversorService,
        HttpClient,
        HttpHandler,
        Conversao,
        ConversorResposta,
        MoedasService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerComponent);
  });

  it('Should create component', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
  //fazer amanhã isso conferir se o resultado apareceu no component de resposta


});
