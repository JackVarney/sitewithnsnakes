import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeBarComponent } from './home-bar.component';

@NgModule({
    declarations: [ HomeBarComponent ],
    imports: [
        NgbModule
    ],
    exports: [ HomeBarComponent ]
})

export class HomeBarModule { }
