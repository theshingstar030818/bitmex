import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Events } from 'ionic-angular';

// Parse
import { Parse } from 'parse';

// Constants
import { ENV } from '../../app/app.constants';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public currentUser: Parse.User = null;

  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;
  private loader;

  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public events: Events
  ) {

  }

  public login(username: String, password: String): Promise<any> {
    this.presentLoading();
    let me = this;
    return new Promise((resolve, reject) => {
      Parse.User.logIn(username, password, {
        success: function(user) {
          me.loader.dismiss();
          me.currentUser = user;
          me.events.publish('BitmexProvider:init', me.currentUser);
          resolve(user);
        },
        error: function(user, error) {
          me.loader.dismiss();
          reject(error);
        }
      });
    });
  }

  public logout() {
    this.presentLoading();
    Parse.User.logOut();
    this.currentUser = null;
    this.events.publish('BitmexProvider:init', this.currentUser);
    this.loader.dismiss();
    this.toastCtrl.create({
      message: ' Logout successful.',
      duration: 3000
    }).present();
  }

  public init() {
    Parse.initialize(this.parseAppId);
    Parse.serverURL = this.parseServerUrl;
    this.currentUser = Parse.User.current();
    this.events.publish('BitmexProvider:init', this.currentUser);
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }
}
