import { Component, OnInit } from '@angular/core';
import { EncomendaService } from '../../services/encomenda.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-listagem-encomendas',
  templateUrl: './listagem-encomendas.html',
  styleUrls: ['./listagem-encomendas.css'],
  imports:[FormsModule, CommonModule]
})
export class ListagemEncomendasComponent implements OnInit {
  encomendas: any[] = [];
  spnErro: any;

  constructor(private service: EncomendaService) {}

  ngOnInit() {
    this.service.listarEncomendas().subscribe((dados: any[]) => {
      this.encomendas = dados;
    });
  }

  retirar(e: any) {
    this.service.marcarRetirada(e.id);
    this.exibirMensagem('Encomenda marcada como retirada!', 'success');
  }

  exibirMensagem(mensagem: string, tipo: 'erro' | 'success' = 'erro'): void {
    const spn = this.spnErro.nativeElement;
    spn.innerText = mensagem;
    spn.style.display = 'block';
    spn.classList.remove('erro', 'sucesso');

    if (tipo === 'success') {
      spn.classList.add('sucesso');
      setTimeout(() => (spn.style.display = 'none'), 8000);
    } else {
      spn.classList.add('erro');
      setTimeout(() => (spn.style.display = 'none'), 4000);
    }
  }
}
