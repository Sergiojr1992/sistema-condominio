import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EncomendaService } from '../../services/encomenda.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem-encomendas',
  templateUrl: './listagem-encomendas.html',
  styleUrls: ['./listagem-encomendas.css'],
  standalone: true,
  imports:[FormsModule, CommonModule]
})
export class ListagemEncomendasComponent implements OnInit {
  encomendas: any[] = [];
  encomendasOriginais: any[] = [];
  blocoPesquisa: string = '';
  apartamentoPesquisa: string = '';

  @ViewChild('spnErro') spnErro!: ElementRef;

  constructor(private service: EncomendaService) {}

  ngOnInit() {
    this.service.listarEncomendas().subscribe((dados: any[]) => {
      this.encomendas = dados;
      this.encomendasOriginais = dados;
    });
  }

  retirar(e: any) {
    this.service.marcarRetirada(e.id);
    this.exibirMensagem('Encomenda marcada como retirada!', 'success');
  }

  buscarEncomendas() {
    this.encomendas = this.encomendasOriginais.filter(e => {
      const bloco = this.blocoPesquisa.toLowerCase();
      const apartamento = this.apartamentoPesquisa.toLowerCase();

      const matchBloco = !bloco || e.bloco.toLowerCase().includes(bloco);
      const matchApartamento = !apartamento || e.apartamento.toLowerCase().includes(apartamento);

      return matchBloco && matchApartamento;
    });
  }

  exibirMensagem(mensagem: string, tipo: 'erro' | 'success' = 'erro'): void {
    const spn = this.spnErro.nativeElement;
    spn.innerText = mensagem;
    spn.style.display = 'block';
    spn.classList.remove('erro', 'sucesso');

    if (tipo === 'success') {
      spn.classList.add('sucesso');
      setTimeout(() => (spn.style.display = 'none'), 5000);
    } else {
      spn.classList.add('erro');
      setTimeout(() => (spn.style.display = 'none'), 4000);
    }
  }
}