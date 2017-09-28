import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GetIndexService } from '../../services/get-index/get-index.service';

@Component({
    selector: 'app-snakes',
    templateUrl: 'snakes.component.html',
    styleUrls: ['../pages.css']
})

export class SnakesComponent implements OnInit, AfterViewInit {

    index: number;

    constructor (private _GetIndexService: GetIndexService ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        console.log('snakes oninit: ' + this.index );
        this._GetIndexService.currentIndex.subscribe(x => this.index = x);
        console.log('snakes after subscribed: ' + this.index);
        this.index = 2;
        console.log('snakes after index given value: ' + this.index);
        this._GetIndexService.changeIndex(this.index);
        console.log('snakes after indexchanged: ' + this.index );
    }

}
