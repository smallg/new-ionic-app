import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {

    constructor(private router: Router, private navCtrl: NavController, private alertController: AlertController) {
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            buttons: ['OK']
        });

        await alert.present();
    }

    gotoList() {
        // this.router.navigateByUrl('/show-list');
        // this.router.navigate(['show-list']);
        this.navCtrl.navigateForward('show-list');
    }
}
