import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncomendaService {
  private moradores: any[] = [];
  private encomendas: any[] = [];

  salvarMorador(morador: any) {
    this.moradores.push(morador);
    console.log('Morador salvo:', morador); 
  }

  buscarMorador(bloco: string, apartamento: string) {
    const morador = this.moradores.find(m =>
      m.bloco === bloco && m.apartamento === apartamento
    );
    console.log('Buscando morador:', bloco, apartamento, 'Resultado:', morador); 
    return of(morador);
  }

  cadastrarEncomenda(encomenda: any) {
    encomenda.status = 'Pendente';
    encomenda.id = Math.random().toString(36).substring(2, 9);
    encomenda.dataCadastro = new Date().toISOString();
    this.encomendas.push(encomenda);
    console.log('Encomenda cadastrada:', encomenda); 
  }

  listarEncomendas() {
    console.log('Listando encomendas:', this.encomendas); 
    return of(this.encomendas);
  }

  marcarRetirada(id: string) {
    const encomenda = this.encomendas.find(e => e.id === id);
    if (encomenda) {
      encomenda.status = 'Retirado';
      encomenda.dataRetirada = new Date().toISOString();
      console.log('Encomenda marcada como retirada:', encomenda); 
    } else {
      console.warn('Encomenda não encontrada para retirada com ID:', id); 
    }
  }
}
