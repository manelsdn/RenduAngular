import { Routes } from '@angular/router';
// 2.1) importer Home et About
import { Home } from './home/home';
import { About } from './about/about';
// 3.5importer ConsultActivite
import { ConsultActivite } from './consult-activite/consult-activite';

export const routes: Routes = [
  // 2.2route vide affiche Home
  { path: '', component: Home },
  // 3.1 la route index.html affiche aussi Home
  { path: 'index.html', component: Home },
  // 2.2route about affiche About
  { path: 'about', component: About },
  // 3.5 la route consultAct
  { path: 'consultAct', component: ConsultActivite },
  // 3.6 la route consultAct avec un id
  { path: 'consultAct/:id', component: ConsultActivite },
  // 3.9 la route consultAct avec deux paramètres
  { path: 'consultAct/:id/:id2', component: ConsultActivite },
];
