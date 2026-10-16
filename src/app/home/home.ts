//1.3 Le composant home
import { Component } from '@angular/core';
//2.3 j'importe FormsModule 
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  //2.3 rajouter FormsModule dans les imports
  imports: [FormsModule, NgClass],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
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
  }
  //2.5 initialiser nbItems 
  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }
}
