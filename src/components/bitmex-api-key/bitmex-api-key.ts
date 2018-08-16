import { BitmexProvider } from '../../providers/bitmex/bitmex';
import { Component } from '@angular/core';

/**
 * Generated class for the BitmexApiKeyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bitmex-api-key',
  templateUrl: 'bitmex-api-key.html'
})
export class BitmexApiKeyComponent {

  public showSecret: boolean = false

  constructor(
    public bitmexProvider: BitmexProvider
  ) {

  }

  save() {

  }

}
