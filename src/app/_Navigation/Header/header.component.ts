import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetIndexService } from '../get-index.service';

import { PAGEINFO } from './header-info';

import { trigger, state, style, animate, transition } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    animations: [
        trigger('on-hover', [
            state('on', style({ top: '10px' })),
            state('off', style({ backgroundColor: 'blue' }))
        ])
    ]
})

export class HeaderComponent implements OnInit {

    index: number;
    pageInfo = PAGEINFO;

    hover: true;
    hoverAnimation = 'on';

    constructor(private _GetIndexService: GetIndexService) { }

    ngOnInit() {
        this._GetIndexService.currentIndex.subscribe(index => this.index = index);
        console.log('hover: ' + this.hoverAnimation);
    }

    getIndex(i) {
        this.index = i + 1;

        this._GetIndexService.changeIndex(this.index);
    }

    onHover(e) {
        if (!this.hover) {
            this.hoverAnimation = (this.hoverAnimation === 'on') ? 'off' : 'on';
        }
    }
}
