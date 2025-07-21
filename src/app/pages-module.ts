import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CadastroEncomendaComponent } from './pages/cadastro-encomenda/cadastro-encomenda';
import { CadastroMoradorComponent } from './pages/cadastro-morador/cadastro-morador';
import { ListagemEncomendasComponent } from './pages/listagem-encomendas/listagem-encomendas';

@NgModule({
  declarations: [], 
  imports: [
    CommonModule,
    FormsModule,
    CadastroEncomendaComponent,
    CadastroMoradorComponent,
    ListagemEncomendasComponent
  ],
  exports: [
    CadastroEncomendaComponent,
    CadastroMoradorComponent,
    ListagemEncomendasComponent
  ]
})
export class PagesModule { }
