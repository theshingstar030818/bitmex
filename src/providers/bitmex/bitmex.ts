import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Events } from 'ionic-angular';
// Parse
import { Parse } from 'parse';
import { BitmexAPI } from "bitmex-node";
/*
  Generated class for the BitmexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BitmexProvider {

  private bitmexApiId: string = undefined
  private bitmexApiSecret: string = undefined
  private loader;
  private bitmex;

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
    this.bitmex = new BitmexAPI({
      "apiKeyID": "NXTy391NCdhrrSWzsJE_xktb",
      "apiKeySecret": "bPVQ51-xxI7bRcuAAOlvH0wUFpPvusfmC1dF6zyy4s3v8Mgd",
      // "testnet": true
    });
    console.log(this.bitmex);
    this.bitmex.Stats.get().then((data)=>{
      console.log(data)
    }).catch((error, data)=>{
      console.log(error)
    });
    // this.bitmex.Order.getOrders({"open": true}).then((data) => {
    //   console.log(data);
    // }).catch((error, data) => {
    //   console.log(error)
    // });
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
