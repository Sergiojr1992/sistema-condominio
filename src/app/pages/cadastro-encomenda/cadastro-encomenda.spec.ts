import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEncomendaComponent } from './cadastro-encomenda';

describe('CadastroEncomendaComponent', () => {
  let component: CadastroEncomendaComponent;
  let fixture: ComponentFixture<CadastroEncomendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroEncomendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEncomendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
