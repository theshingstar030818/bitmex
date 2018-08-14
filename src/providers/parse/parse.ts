import { Injectable } from '@angular/core';

// Parse
import { Parse } from 'parse';

// Constants
import { ENV } from '../../app/app.constants';

/*
  Generated class for the ParseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParseProvider {

  public currentUser: Parse.User = null;

  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;

  constructor() { }

  public init() {
    Parse.initialize(this.parseAppId);
    Parse.serverURL = this.parseServerUrl;
    this.currentUser = Parse.User.current();
  }
}
