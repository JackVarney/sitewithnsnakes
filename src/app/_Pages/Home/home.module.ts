import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// stuff
import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';

// components
import { HomeBarModule } from './home-bar/home-bar.module';
import { HomeTextModule } from './home-text/home-text.module';
import { HomeModalModule } from './home-modal/home-modal.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        homeRouter,
        HomeBarModule,
        HomeTextModule,
        HomeModalModule,
        CommonModule
    ],
    exports: []
})

export class HomeModule { }
