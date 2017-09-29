import { Component, OnInit } from '@angular/core';

import { GetColourService } from './sidenav-get-colour.service';
import { GetIndexService } from '../../services/get-index/get-index.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: 'sidenav.component.html',
    styleUrls: ['sidenav.component.css']
})

export class SidenavComponent implements OnInit {

    index: number;

    constructor(
        private _GetColourService: GetColourService,
        private _GetIndexService: GetIndexService
    ) { }

    ngOnInit() {
        this._GetIndexService.currentIndex.subscribe(x => this.index = x);
        console.log('sidenav init             init                init');
    }

    getColour() {
        console.log('sidenav: ' + this.index);
        return this._GetColourService.getColourService(this.index);
    }
}
