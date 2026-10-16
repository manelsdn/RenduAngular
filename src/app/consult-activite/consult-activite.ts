import { Component } from '@angular/core';
// 3.7 importer ActivatedRoute
// 1.8 importer Router (tp5)
import { ActivatedRoute, Router } from '@angular/router';
// 1.7 importer ActiviteService (tp5)
import { ActiviteService } from '../services/activite';

@Component({
  imports: [],
  selector: 'app-consult-activite',
  styleUrl: './consult-activite.scss',
  templateUrl: './consult-activite.html',
})
export class ConsultActivite {
  // 3.7 le premier paramètre
  id: string = "";
  // 3.9 le deuxième paramètre
  id2: string = "";
  // 1.7 le titre de l'activité (tp5)
  titre: string = "";
  // 1.8 l'indice de l'activité (tp5)
  index: number = 0;

  // 3.7 je rajoute ActivatedRoute dans le constructeur
  // 1.7 j'injecte ActiviteService dans le constructeur (tp5)
  // 1.8 j'injecte Router dans le constructeur (tp5)
  constructor(private route: ActivatedRoute, public monService: ActiviteService, private monRouteur: Router) {
    // 3.7 je récupère id dans snapshot.params
    this.id = this.route.snapshot.params['id'];
    // 3.9 je récupère id2
    this.id2 = this.route.snapshot.params['id2'];
    // 1.7 je retrouve l'activité avec l'indice (tp5)
    this.titre = this.monService.objectifs[Number(this.id)];
    // 1.8 je garde l'indice (tp5)
    this.index = Number(this.id);
  }

  // 1.8 supprimer l'élément puis revenir à l'accueil (tp5)
  supprimeElem(index: number) {
    this.monService.removeItem(index);
    this.monRouteur.navigate(['']);
  }
}
