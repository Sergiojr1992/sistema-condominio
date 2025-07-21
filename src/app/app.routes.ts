import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { HomeComponent } from './home/home';
import { CadastroEncomendaComponent } from './pages/cadastro-encomenda/cadastro-encomenda';
import { CadastroMoradorComponent } from './pages/cadastro-morador/cadastro-morador';
import { ListagemEncomendasComponent } from './pages/listagem-encomendas/listagem-encomendas';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  {
    path: 'home',
    component: HomeComponent,  
    children: [
      { path: 'cadastro-encomenda', component: CadastroEncomendaComponent },
      { path: 'cadastro-morador', component: CadastroMoradorComponent },
      { path: 'listagem-encomendas', component: ListagemEncomendasComponent },
      
    ]
  }
];
