import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { HomeTextComponent } from './home-text.component';

@NgModule({
    declarations: [
        HomeTextComponent
    ],
    imports: [
        MatInputModule
    ],
    exports: [
        HomeTextComponent
    ]
})

export class HomeTextModule { }
