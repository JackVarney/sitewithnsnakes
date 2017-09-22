import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { GetColourService } from './sidenav-get-colour.service';
import { GetIndexService } from '../get-index.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: 'sidenav.component.html' ,
    styleUrls: ['sidenav.component.css'] ,
    encapsulation: ViewEncapsulation.None
})

export class SidenavComponent implements OnInit {

    index: number;
    constructor (
        private _GetColourService: GetColourService,
        private _GetIndexService: GetIndexService
    ) { }

    ngOnInit() {
        this._GetIndexService.currentIndex.subscribe(x => this.index = x);
    }

    getColour() {
        return this._GetColourService.getColourService(this.index);
    }
}
