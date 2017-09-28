import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GetIndexModule } from '../../services/get-index/get-index-service.module';
import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [ HeaderComponent ],
    imports: [
        CommonModule,
        RouterModule,
        GetIndexModule
     ],
    exports: [ HeaderComponent ]
})

export class HeaderModule { }
