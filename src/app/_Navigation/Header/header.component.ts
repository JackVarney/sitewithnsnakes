import { Component } from '@angular/core';

import { PAGEINFO } from './header-info';
import { GetIndexService } from '../../services/get-index/get-index.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent {

    index: number;
    pageInfo = PAGEINFO;

    constructor (private _GetIndexService: GetIndexService ) { }

    getIndex(i) {
        this.index = i + 1;
        console.log('header getindex: ' + this.index);
        this._GetIndexService.changeIndex(this.index);
    }
}
