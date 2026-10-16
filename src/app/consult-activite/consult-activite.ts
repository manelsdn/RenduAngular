import { Component } from '@angular/core';
// 3.7 importer ActivatedRoute
import { ActivatedRoute } from '@angular/router';

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

  // 3.7 je rajoute ActivatedRoute dans le constructeur
  constructor(private route: ActivatedRoute) {
    // 3.7 je récupère id dans snapshot.params
    this.id = this.route.snapshot.params['id'];
    // 3.9 je récupère id2
    this.id2 = this.route.snapshot.params['id2'];
  }
}
