import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemEncomendas } from './listagem-encomendas';

describe('ListagemEncomendas', () => {
  let component: ListagemEncomendas;
  let fixture: ComponentFixture<ListagemEncomendas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemEncomendas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemEncomendas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
