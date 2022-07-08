import { Pipe, PipeTransform } from '@angular/core';
import { Offre } from './Models/offres';

@Pipe({
  name: 'selectedOffre'
})
export class SelectedOffrePipe implements PipeTransform {

  transform(allOffres: Offre[], offreId: number): any {
    return allOffres.filter(o => o.id === offreId);
  }

}
