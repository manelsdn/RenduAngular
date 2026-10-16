import { Component, signal } from '@angular/core';
// 2.4 importer RouterLink pour les liens
import { RouterOutlet, RouterLink } from '@angular/router';
// 1.4 on importe Home et About ici
import { Home } from './home/home';
import { About } from './about/about';

@Component({
  // 1.4 on rajoute Home et About dans les imports
  imports: [RouterOutlet, RouterLink, Home, About],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ModuleAngularTP3');
}
