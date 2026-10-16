// 1.3 c'est le composant about
import { Component } from '@angular/core';
// 1.5 importer ActiviteService (tp5)
import { ActiviteService } from '../services/activite';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  name: string = "Manel SAADANE";

  // 1.5 injecter ActiviteService dans le constructeur (tp5)
  constructor(public monService: ActiviteService) {}
}
