// 1.1 importer Injectable (tp5)
import { Injectable } from '@angular/core';

// 1.1 providedIn root (tp5)
@Injectable({ providedIn: 'root' })
export class ActiviteService {
  // 1.3 le tableau objectifs est maintenant dans le service (tp5)
  objectifs: string[] = [];
}
