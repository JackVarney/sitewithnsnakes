import { NgModule } from '@angular/core';

import { ApplesComponent } from './apples.component';
import { applesRouter } from './apples.router';
import { GetIndexModule } from '../../services/get-index/get-index-service.module';


@NgModule({
    declarations: [
        ApplesComponent
     ],
    imports: [
        applesRouter,
        GetIndexModule
    ],
    exports: [],
})

export class ApplesModule { }
