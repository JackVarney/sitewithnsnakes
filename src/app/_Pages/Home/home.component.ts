import { Component, AfterViewInit } from '@angular/core';

import { HomeBarModule } from './home-bar/home-bar.module';

import { GetIndexService } from '../../services/get-index/get-index.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: [
        '../pages.css',
        './home.component.css'
    ]
})

export class HomeComponent implements AfterViewInit {

    constructor ( private _GetIndexService: GetIndexService ) { }

    ngAfterViewInit() {
        this._GetIndexService.changeIndex(pageIndex);
    }
}

const pageIndex = 1;
