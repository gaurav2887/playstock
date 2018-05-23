import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseDataService } from './services/firebase-data.service';
import { UserService } from './services/user.service';
import { IonicStorageModule } from '@ionic/storage';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAn3LGqn8-783WN0GIL-DQdxhXKNtx0Tk0",
  authDomain: "playstock-9a9c2.firebaseapp.com",
  databaseURL: "https://playstock-9a9c2.firebaseio.com",
  projectId: "playstock-9a9c2",
  storageBucket: "playstock-9a9c2.appspot.com",
  messagingSenderId: "506921880754"
};

export const ALPHA_VINTAGE_KEY = "ZCPBSKHC9PLX9QTN";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    FirebaseDataService,
    UniqueDeviceID
  ],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ]
})
export class AppModule {}
