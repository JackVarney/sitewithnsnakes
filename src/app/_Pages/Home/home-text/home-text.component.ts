import { Component, OnInit } from '@angular/core';
import { ProgBarService } from '../services/prog-bar.service';
import { ModalButtonStateService } from '../services/modal-button-state.service';

@Component({
    selector: 'app-home-text',
    templateUrl: 'home-text.component.html',
    styleUrls: ['home-text.component.css']
})

export class HomeTextComponent implements OnInit {

    characters: string;
    barLength: number;
    modalButtonState: boolean;

    constructor (
        private _ProgBarService: ProgBarService,
        private _ButtonStateService: ModalButtonStateService
    ) { }

    ngOnInit() {
        this._ProgBarService.currentBarLength.subscribe(x => this.barLength = x);
    }

    getCharLength() {


        // works out the how many characters are in the textarea so that the progress bar can update its length
        this.barLength = this.characters.length;
        this._ProgBarService.changeBarLength(this.barLength);

        // if more than 100 characters are in the text area then a button will display
        if ( this.barLength > 100 ) {
            this.modalButtonState = true;
            this._ButtonStateService.changeButtonState(this.modalButtonState);
        } else {
            this.modalButtonState = false;
            this._ButtonStateService.changeButtonState(this.modalButtonState);
        }

    }
 }
