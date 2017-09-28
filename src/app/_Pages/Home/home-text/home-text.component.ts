import { Component } from '@angular/core';
import { ProgBarService } from '../services/prog-bar.service';

@Component({
    selector: 'app-home-text',
    templateUrl: 'home-text.component.html',
    styleUrls: ['home-text.component.css']
})

export class HomeTextComponent {

    constructor (private _ProgBarService: ProgBarService ) { }



 }
