import { Component, OnInit } from '@angular/core';

import { GetIndexService } from '../../services/get-index/get-index.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['../pages.css']
})

export class HomeComponent implements OnInit {

    index: number;

    constructor (private _GetIndexService: GetIndexService) { }

    ngOnInit() {
        this._GetIndexService.currentIndex.subscribe(x => this.index = x);
        this.index = 1;
        this._GetIndexService.changeIndex(this.index);
        console.log('home: ' + this.index);
    }
}
