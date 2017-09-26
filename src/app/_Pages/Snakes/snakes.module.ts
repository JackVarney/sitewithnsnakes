import { NgModule } from '@angular/core';
import { SnakesComponent } from './snakes.component';
import { snakesRouter } from './snakes.router';
import { GetIndexModule } from '../../services/get-index/get-index-service.module';
import { SnakesCarouselModule } from './snakes-carousel/snakes-carousel.module';

@NgModule({
    declarations: [
        SnakesComponent
    ],
    imports: [
        snakesRouter,
        GetIndexModule,
        SnakesCarouselModule
    ],
    exports: []
})

export class SnakesModule { }
