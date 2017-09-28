import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MdInputModule } from '@angular/material';
import { HomeTextComponent } from './home-text.component';
import { ProgBarServiceModule } from '../services/prog-bar.module';

@NgModule({
    declarations: [
        HomeTextComponent
    ],
    imports: [
        MdInputModule,
        ProgBarServiceModule,

        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserModule
    ],
    exports: [
        HomeTextComponent
    ]
})

export class HomeTextModule { }
