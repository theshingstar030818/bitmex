import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  username: String = '';
  password: String = '';

  constructor(
    private auth: AuthProvider,
    public toastCtrl: ToastController,
  ) { 

  }

  /**
   * login
   */
  login() {
    this.auth.login(this.username, this.password).then((user) => {
      console.log(user);
      this.toastCtrl.create({
        message: user.getUsername() + ' logged in successfully.',
        duration: 3000
      }).present();
    }).catch((error) => {
      console.log(error);
      this.toastCtrl.create({
        message: error.message,
        duration: 3000
      }).present();
    })
  }

}
