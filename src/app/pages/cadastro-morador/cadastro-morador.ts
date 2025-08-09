import { Component, ElementRef, ViewChild } from '@angular/core';
import { EncomendaService } from '../../services/encomenda.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-morador',
  templateUrl: './cadastro-morador.html',
  styleUrls: ['./cadastro-morador.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class CadastroMoradorComponent {
  
  @ViewChild('spnErro') spnErro!: ElementRef;

  morador = {
    morador: '',
    bloco: '',
    apartamento: '',
    whatsapp: ''
  };

  constructor(private service: EncomendaService) {}

  salvarMorador() {
    if (!this.morador.morador || !this.morador.bloco || !this.morador.apartamento || !this.morador.whatsapp) {
      this.exibirMensagem('Preencha todos os campos antes de salvar.', 'erro');
      return;
    }

    try {
      this.service.salvarMorador(this.morador);
      this.exibirMensagem('Morador cadastrado com sucesso!', 'success');
      this.morador = { morador: '', bloco: '', apartamento: '', whatsapp: '' };
    } catch (error) {
      console.error('Erro ao salvar morador:', error);
      this.exibirMensagem('Erro ao cadastrar morador. Tente novamente!', 'erro');
    }
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
