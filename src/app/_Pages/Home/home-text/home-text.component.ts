import { Component, OnInit } from '@angular/core';
import { ProgBarService } from '../services/prog-bar.service';

@Component({
    selector: 'app-home-text',
    templateUrl: 'home-text.component.html',
    styleUrls: ['home-text.component.css']
})

export class HomeTextComponent implements OnInit {

    characters: string;
    length: number;

    constructor (private _ProgBarService: ProgBarService ) { }

    ngOnInit() {
        this._ProgBarService.currentBarLength.subscribe(x => this.length = x);
    }

    charactersMethod () {
        console.log(this.characters);
    }
 }
