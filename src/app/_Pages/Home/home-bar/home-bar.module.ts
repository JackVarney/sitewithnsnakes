import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeBarComponent } from './home-bar.component';
import { ProgBarServiceModule } from '../services/prog-bar.module';

@NgModule({
    declarations: [ HomeBarComponent ],
    imports: [
        NgbModule,
        ProgBarServiceModule
    ],
    exports: [ HomeBarComponent ]
})

export class HomeBarModule { }
