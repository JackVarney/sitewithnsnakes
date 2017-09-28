import { Component, OnInit } from '@angular/core';

import { PAGEINFO } from './header-info';
import { GetIndexService } from '../../services/get-index/get-index.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {

    index: number;
    pageInfo = PAGEINFO;

    constructor (private _GetIndexService: GetIndexService ) { }

    ngOnInit() {
        console.log('header oninit: ' + this.index);
        this._GetIndexService.currentIndex.subscribe(x => this.index = x);
        console.log('header after oninit: ' + this.index);
    }

    getIndex(i) {
        this.index = i + 1;
        console.log('header getindex: ' + this.index);
        this._GetIndexService.changeIndex(this.index);
    }
}
