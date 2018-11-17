import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-show-list',
    templateUrl: './show-list.page.html',
    styleUrls: ['./show-list.page.scss'],
})
export class ShowListPage implements OnInit {

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.goBack();
    }

}
