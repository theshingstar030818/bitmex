import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register',
  templateUrl: 'register.html'
})
export class RegisterComponent {

  constructor(
    public toastCtrl: ToastController,
  ) {

  }

  register() {
    this.toastCtrl.create({
      message: 'Registration coming soon!',
      duration: 1600
    }).present();
  }

}
