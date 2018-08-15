import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Events } from 'ionic-angular';
// Parse
import { Parse } from 'parse';

/*
  Generated class for the BitmexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BitmexProvider {

  private bitmexApiId: String = undefined
  private bitmexApiSecret: String = undefined
  private loader;

  constructor(
    public events: Events,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
  ) {
    events.subscribe('BitmexProvider:init', (user: Parse.User) => {
      this.init(user)
    });
  }

  init(user: Parse.User) {
    this.bitmexApiId = user ? user.get('bitmexApiId') : undefined
    this.bitmexApiSecret = user ? user.get('bitmexApiSecret') : undefined
    console.log(this.bitmexApiId);
    console.log(this.bitmexApiSecret);
    console.log(user);
  }

  saveApi() {
    this.presentLoading();
    Parse.User.current().set('bitmexApiId', this.bitmexApiId);
    Parse.User.current().set('bitmexApiSecret', this.bitmexApiSecret);
    Parse.User.current().save();
    this.loader.dismiss();
    this.toastCtrl.create({
      message: 'Api Key Updated.',
      duration: 600
    }).present();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

}
