import { Component, ViewChild } from '@angular/core';

import { IonRouterOutlet, Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;

  constructor(
     private router: Router,
    private alertCtrl: AlertController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.platform.backButton.subscribe(() => {
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
          this.routerOutlet.pop();
        } else if (this.router.url === '/tabs/tab1') {
          navigator['app'].exitApp();
        } else {
          this.presentAlertConfirm();
        }
    });
  }


   async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmer!',
      message: 'Voulez-vous quitter l\'application?',
      buttons: [
        {
          text: 'Annuler',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
            navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
    }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
