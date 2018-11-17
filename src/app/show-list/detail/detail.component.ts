import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content, NavController } from '@ionic/angular';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    @ViewChild(Content) content: Content;

    constructor(private route: ActivatedRoute, private router: Router, private navCtrl: NavController) {
    }

    ngOnInit() {
        console.log(this.route.snapshot.paramMap.get('id'));
    }

    goBack() {
        this.navCtrl.goBack();
    }

    goBackRoot() {
        this.navCtrl.navigateRoot('/');
    }

    logScrollStart() {
        // console.log('logScrollStart');
    }

    logScrolling(e) {
        // console.log('logScrolling', e);
    }

    logScrollEnd() {
        // console.log('logScrollEnd');
    }

    gotoTop() {
        this.content.scrollToTop();
    }

    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            // if (data.length === 1000) {
            //     event.target.disabled = true;
            // }
        }, 500);
    }

    doRefresh(event) {
        console.log('Begin async operation');

        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }

}
