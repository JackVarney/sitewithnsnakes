import { Routes, RouterModule } from '@angular/router';
import { ApplesComponent } from './apples.component';

const applesRoutes: Routes  = [
    {
        path: '',
        component: ApplesComponent
    }
];

export const applesRouter = RouterModule.forChild(applesRoutes);
