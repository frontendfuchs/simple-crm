import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Stats } from './stats/stats';
import { User } from './user/user';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: Dashboard,
    },
    {
        path:'stats',
        component: Stats,
    },
    {
        path: 'user',
        component: User,
    }
];
