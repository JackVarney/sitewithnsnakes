import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PAGEINFO } from './header-info';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent {

    index: number;
    pageInfo = PAGEINFO;
}
