import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1.4 on importe Home et About ici
import { Home } from './home/home';
import { About } from './about/about';

@Component({
  // 1.4 on rajoute Home et About dans les imports
  imports: [RouterOutlet, Home, About],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ModuleAngularTP3');
}
