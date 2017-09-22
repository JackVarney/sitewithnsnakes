import { NgModule } from '@angular/core';

import { SnakesComponent } from './snakes.component';
import { snakesRouter } from './snakes.router';

import { SnakesCarouselModule } from './snakes-carousel/snakes-carousel.module';

@NgModule({
    declarations: [
        SnakesComponent
    ],
    imports: [
        snakesRouter,

        SnakesCarouselModule
    ],
    exports: []
})

export class SnakesModule { }
