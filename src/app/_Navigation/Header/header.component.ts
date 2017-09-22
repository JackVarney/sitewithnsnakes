import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetIndexService } from '../get-index.service';

import { PAGEINFO } from './header-info';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {

    index: number;
    pageInfo = PAGEINFO;

    constructor (private _GetIndexService: GetIndexService) { }

    ngOnInit() {
        this._GetIndexService.currentIndex.subscribe(index => this.index = index);
    }

    getIndex(i) {
        this.index = i + 1;

        this._GetIndexService.changeIndex(this.index);
    }
}
