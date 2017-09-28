import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';

// components
import { HomeBarModule } from './home-bar/home-bar.module';
import { HomeTextModule } from './home-text/home-text.module';

// services
import { GetIndexModule } from '../../services/get-index/get-index-service.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        homeRouter,
        GetIndexModule,
        HomeBarModule,
        HomeTextModule
    ],
    exports: []
})

export class HomeModule { }
