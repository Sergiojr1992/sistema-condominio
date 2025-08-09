import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  @ViewChild('spnErro') spnErro!: ElementRef<HTMLSpanElement>;

  username = '';
  password = '';
  carregando = false;

  constructor(private router: Router) { }

  login() {
    if (!this.username || !this.password) {
      this.exibirErro('Preencha todos os campos.', 'erro');
      return;
    }

    this.carregando = true;

    setTimeout(() => {
      if (this.username === 'admin' && this.password === '1234') {
        this.exibirErro('Login efetuado com sucesso!', 'success');
        setTimeout(() => this.router.navigate(['/home']), 1500);
      } else {
        this.exibirErro('Usuário ou senha inválidos', 'erro');
      }

      this.carregando = false;
    }, 800);
  }

  exibirErro(mensagem: string, tipo: 'erro' | 'success' = 'erro'): void {
    const spn = this.spnErro.nativeElement;
    spn.innerText = mensagem;
    spn.style.display = 'inline-block';
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
