import { Pipe, PipeTransform } from '@angular/core';
import { SelectedAlgorithmOption } from '../models/selected-algorithm.enum';

@Pipe({
  name: 'alg'
})
export class AlgPipe implements PipeTransform {

  transform(value: SelectedAlgorithmOption, ...args: unknown[]): unknown {
    switch (value) {
      case 1:
        return 'Linear Search';
      case 2:
        return 'Binary Search';
      default:
        return 'Select Algorithm';
    }
  }

}
