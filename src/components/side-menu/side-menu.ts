import { Component, Input } from '@angular/core';
import { Nav } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

interface SideMenuPage {
  title: string,
  component: any,
  registered?: boolean
}


/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent {

  @Input() nav: Nav;

  pages: Array<SideMenuPage> = [
    { title: 'Home', component: 'HomePage' },
  ];

  loggedInPages: Array<SideMenuPage> = [
    { title: 'Home', component: 'HomePage' },
    { title: 'List', component: 'ListPage' }
  ];

  constructor(
    public auth: AuthProvider,
  ) { }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
