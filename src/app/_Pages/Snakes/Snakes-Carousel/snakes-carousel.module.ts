import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SnakesCarouselComponent } from './snakes-carousel.component';

@NgModule({
    declarations: [ SnakesCarouselComponent ],
    imports: [
        NgbModule,
        CommonModule
    ],
    exports: [ SnakesCarouselComponent ]
})

export class SnakesCarouselModule { }
