import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const router: Routes = [
    {
        path: '',
        loadChildren: 'app/_Pages/Home/home.module#HomeModule'
    },
    {
        path: 'snakes',
        loadChildren: 'app/_Pages/Snakes/snakes.module#SnakesModule'
    },
    {
        path: 'apples',
        loadChildren: 'app/_Pages/Apples/apples.module#ApplesModule'
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
