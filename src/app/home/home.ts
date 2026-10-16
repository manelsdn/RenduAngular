//1.3 Le composant home
import { Component } from '@angular/core';
//2.3 j'importe FormsModule 
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
// 3.3 j'importe Router
import { Router } from '@angular/router';
// 1.2 importer ActiviteService (tp5)
import { ActiviteService } from '../services/activite';

@Component({
  //2.3 rajouter FormsModule dans les imports
  imports: [FormsModule, NgClass],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  // 3.3 je rajoute monRouteur dans le constructeur
  // 1.2 injecter ActiviteService dans le constructeur (tp5)
  constructor(private monRouteur: Router, public monService: ActiviteService) {}

  //2.1 je rajoute nbItems à 4
  nbItems: number = 4;
  //2.2 btnText, pour le texte du bouton
  btnText: string = "Envoyer";
  //2.3 je rajoute objectifText
  objectifText: string = "";
  // 2.5 création du tableau objectifs vide
  objectifs: string[] = [];
  //2.6 la fonction ajoutItem, je rajoute un élément avec push
  ajoutItem() {
    this.objectifs.push(this.objectifText);
    this.nbItems++;
    // 3.4 après 1 seconde je vais sur la page about
    setTimeout(() => {
      this.monRouteur.navigate(['about']);
    }, 1000);
  }
  //2.5 initialiser nbItems 
  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }
}