import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  rootPage:any=LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,auth:UserProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if("stat" in auth.user){
        if(auth.user.stat){
          this.rootPage=TabsPage;
        }
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
