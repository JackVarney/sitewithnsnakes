import { NgModule } from '@angular/core';

import { ApplesComponent } from './apples.component';
import { applesRouter } from './apples.router';

@NgModule({
    declarations: [
        ApplesComponent
     ],
    imports: [
        applesRouter
    ],
    exports: [],
})

export class ApplesModule { }
