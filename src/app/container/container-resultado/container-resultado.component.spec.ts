import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerResultadoComponent } from './container-resultado.component';

describe('ContainerResultadoComponent', () => {
  let component: ContainerResultadoComponent;
  let fixture: ComponentFixture<ContainerResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
