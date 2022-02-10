import { ConversorResposta } from './../conversor-resposta';
import { ContainerResultadoComponent } from './../container-resultado.component';
import { ContainerResultadoService } from 'src/app/service/container-resultado.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
describe(ContainerResultadoComponent.name, () => {
  let fixture: ComponentFixture<ContainerResultadoComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerResultadoComponent],
      providers: [ContainerResultadoService, ConversorResposta],
    }).compileComponents();
    fixture = TestBed.createComponent(ContainerResultadoComponent);
  });

  it('Should create component', () =>{
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  })

});
