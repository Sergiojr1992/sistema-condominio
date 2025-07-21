import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,  NgIf],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  protected title = 'sistema-condominio';
  mostrarMensagem = true;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const rotaFilha = this.route.firstChild;
        this.mostrarMensagem = !rotaFilha?.snapshot.url.length;
      });
  }
}
