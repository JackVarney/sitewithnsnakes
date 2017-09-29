import { Component, AfterViewInit } from '@angular/core';
import { GetIndexService } from '../../services/get-index/get-index.service';

@Component({
    selector: 'app-apples',
    templateUrl: 'apples.component.html',
    styleUrls: ['../pages.css']
})

export class ApplesComponent implements AfterViewInit {

    constructor ( private _GetIndexService: GetIndexService ) { }

    ngAfterViewInit() {
        this._GetIndexService.changeIndex(pageIndex);
    }
}

const pageIndex = 3;
