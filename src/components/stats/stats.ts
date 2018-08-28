import { Component } from '@angular/core';
import { BitmexProvider } from '../../providers/bitmex/bitmex';

/**
 * Generated class for the StatsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'stats',
  templateUrl: 'stats.html'
})
export class StatsComponent {

  constructor(
    public bitmexProvider: BitmexProvider
  ) {
    
  }

}
