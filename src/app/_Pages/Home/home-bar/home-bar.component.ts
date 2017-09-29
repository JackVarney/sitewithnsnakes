import { Component, OnInit } from '@angular/core';
import { ProgBarService } from '../services/prog-bar.service';

@Component({
    selector: 'app-home-bar',
    templateUrl: 'home-bar.component.html',
    styleUrls: ['home-bar.component.css']
})

export class HomeBarComponent implements OnInit {

    barLength: number;

    constructor (private _ProgBarService: ProgBarService) { }

    ngOnInit() {
        this._ProgBarService.currentBarLength.subscribe(x => this.barLength = x);
    }

    getValue() {
        return this.barLength;
    }

}
