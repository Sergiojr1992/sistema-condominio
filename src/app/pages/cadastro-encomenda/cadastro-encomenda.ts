import { Component, ElementRef, ViewChild } from '@angular/core';
import { EncomendaService } from '../../services/encomenda.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-encomenda',
  templateUrl: './cadastro-encomenda.html',
  styleUrls: ['./cadastro-encomenda.css'],
  standalone: true,
  imports: [FormsModule]
})
export class CadastroEncomendaComponent {
  
  @ViewChild('spnErro') spnErro!: ElementRef;

  dados = {
    bloco: '',
    apartamento: '',
    descricao: '',
    whatsapp: ''
  };

  constructor(private service: EncomendaService) {}

  buscarWhatsapp() {
    if (this.dados.bloco && this.dados.apartamento) {
      this.service.buscarMorador(this.dados.bloco, this.dados.apartamento)
        .subscribe((morador: any) => {
          this.dados.whatsapp = morador?.whatsapp || '';
        });
    }
  }

cadastrarEncomenda() {
  if (!this.dados.bloco || !this.dados.apartamento || !this.dados.descricao || !this.dados.whatsapp) {
    this.exibirErro('Preencha todos os campos antes de cadastrar.', 'erro');
    return;
  }

  this.service.cadastrarEncomenda(this.dados).subscribe({
    next: (res: any) => {
      if (res === true || res.sucesso) {
        this.exibirErro('Encomenda cadastrada com sucesso!', 'success');
        this.dados = { bloco: '', apartamento: '', descricao: '', whatsapp: '' };
      } else {
        this.exibirErro(res.mensagem || 'Erro ao cadastrar encomenda.', 'erro');
      }
    },
    error: (err: any) => {
      console.error('Erro ao cadastrar encomenda:', err);
      this.exibirErro('Encomenda não cadastrada. Tente novamente!', 'erro');
    }
  });
}


  exibirErro(mensagem: string, tipo: 'erro' | 'success' = 'erro'): void {
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
