import { Component, OnInit } from '@angular/core';
import { EncomendaService } from '../../services/encomenda.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-listagem-encomendas',
  templateUrl: './listagem-encomendas.html',
  imports:[FormsModule, CommonModule]
})
export class ListagemEncomendasComponent implements OnInit {
  encomendas: any[] = [];

  constructor(private service: EncomendaService) {}

  ngOnInit() {
    this.service.listarEncomendas().subscribe((dados: any[]) => {
      this.encomendas = dados;
    });
  }

  retirar(e: any) {
    this.service.marcarRetirada(e.id);
    alert('Encomenda marcada como retirada.');
  }
}
