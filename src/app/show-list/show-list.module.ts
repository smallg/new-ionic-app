import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowListPage } from './show-list.page';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    {
        path: '',
        component: ShowListPage
    },
    {
        path: ':id',
        component: DetailComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ShowListPage, DetailComponent]
})
export class ShowListPageModule {
}
