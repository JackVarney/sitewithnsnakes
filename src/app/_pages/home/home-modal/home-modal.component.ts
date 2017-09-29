import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalButtonStateService } from '../services/modal-button-state.service';

@Component({
    selector: 'app-home-modal',
    templateUrl: 'home-modal.component.html',
    styleUrls: ['home-modal.component.css']
})

export class HomeModalComponent implements OnInit {

    showButton: boolean;
    closeResult: String;

    constructor (
        private modalService: NgbModal,
        private modalButtonState: ModalButtonStateService
    ) { }

    open(content) {
        this.modalService.open(content);
    }

    ngOnInit() {
        this.modalButtonState.currentButtonState.subscribe(x => this.showButton = x);
    }

 }
