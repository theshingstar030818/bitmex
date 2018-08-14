import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { LoginComponent } from '../../components/login/login';
import { RegisterComponent } from '../../components/register/register';
import { BitmexApiKeyComponent } from '../../components/bitmex-api-key/bitmex-api-key';

@NgModule({
  declarations: [
    HomePage,
    LoginComponent,
    RegisterComponent,
    BitmexApiKeyComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [

  ]
})
export class HomePageModule {}
