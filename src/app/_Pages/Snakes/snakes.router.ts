import { Routes, RouterModule } from '@angular/router';
import { SnakesComponent } from './snakes.component';

const snakesRoutes: Routes = [
    {
        path: '',
        component: SnakesComponent
    }
];

export const snakesRouter = RouterModule.forChild(snakesRoutes);
