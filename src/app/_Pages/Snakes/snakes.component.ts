import { Component, OnInit } from '@angular/core';

import { GetIndexService } from '../../services/get-index/get-index.service';

@Component({
    selector: 'app-snakes',
    templateUrl: 'snakes.component.html',
    styleUrls: ['../pages.css']
})

export class SnakesComponent implements OnInit {

    index: number;

    constructor (private _GetIndexService: GetIndexService ) { }

    ngOnInit() {
        this._GetIndexService.currentIndex.subscribe(x => this.index = x);
        this.index = 2;
        this._GetIndexService.changeIndex(this.index);
        console.log('snakes: ' + this.index);
    }
}
