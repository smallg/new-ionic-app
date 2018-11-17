import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {

    constructor(private router: Router, private navCtrl: NavController) {
    }


    gotoList() {
        // this.router.navigateByUrl('/show-list');
        // this.router.navigate(['show-list']);
        this.navCtrl.navigateForward('show-list');
    }
}
