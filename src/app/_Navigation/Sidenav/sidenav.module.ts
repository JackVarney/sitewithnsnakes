import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule, MdIconModule, MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav.component';
import { GetColourService } from './sidenav-get-colour.service';

import { GetIndexModule } from '../../services/get-index/get-index-service.module';

@NgModule({
    declarations: [ SidenavComponent ],
    imports: [
        BrowserAnimationsModule,
        MdSidenavModule,
        MdIconModule,
        MdButtonModule,
        RouterModule,

        GetIndexModule
    ],
    exports: [ SidenavComponent ],
    providers: [ GetColourService ]
})

export class SidenavModule { }
