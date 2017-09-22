import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule, MdIconModule, MdButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav.component';
import { GetColourService } from './sidenav-get-colour.service';

@NgModule({
    declarations: [ SidenavComponent ],
    imports: [
        BrowserAnimationsModule,
        MdSidenavModule,
        MdIconModule,
        MdButtonModule,
        RouterModule
    ],
    exports: [ SidenavComponent ],
    providers: [ GetColourService ]
})

export class SidenavModule { }
