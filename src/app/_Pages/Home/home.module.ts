import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';
import { GetIndexModule } from '../../services/get-index/get-index-service.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        homeRouter,
        GetIndexModule
    ],
    exports: []
})

export class HomeModule { }
