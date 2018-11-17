import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    constructor(private route: ActivatedRoute, private navCtrl: NavController) {
    }

    ngOnInit() {
        console.log(this.route.snapshot.paramMap.get('id'));
    }

    goBack() {
        this.navCtrl.navigateRoot('/');
    }

}
