import { ROUTE } from './../shared/const/route';
import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contentAlertBtn: Array<string> = ['I agree'];

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}

  async showPopUpAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'If you agree, you will navigate to ranking page !',
      backdropDismiss: false,
      buttons: [
        {
          text: 'I agree',
          role: 'Yes'
        },
        {
          text: 'I disagree',
          role: 'No'
        }
      ]
    });
    await alert.present();
    alert.onDidDismiss().then((res: any) => {
      if (res && res.role == 'Yes') {
        this.navCtrl.navigateForward(ROUTE.AGENT_RANK);
      }
    })
    
  }

}
