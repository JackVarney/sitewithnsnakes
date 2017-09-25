import { Component, OnInit } from '@angular/core';

import { GetPageID } from '../get-page-id.service';

@Component({
    selector: 'app-apples',
    templateUrl: 'apples.component.html',
    styleUrls: ['../pages.css']
})

export class ApplesComponent implements OnInit {

    index: number;

    constructor (private _GetPageID: GetPageID ) { }

    ngOnInit() {
        this._GetPageID.currentIndex.subscribe(x => this.index = x);
        this.index = 3;
        console.log('apples: ' + this.index);
    }

 }
