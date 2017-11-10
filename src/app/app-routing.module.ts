import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, RequestNewPasswordComponent } from './auth/index';
import { DashboardComponent } from './dashboard/index';
import { AuthGuard } from '../shared/guard/index';
import { NotfoundComponent } from './notfound/index'

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: RequestNewPasswordComponent },
    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);