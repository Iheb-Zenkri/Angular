import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeropageComponent } from './pages/heropage/heropage.component';
import { PreLoginComponent } from './pages/pre-login/pre-login.component';

export const routes: Routes = [
    {path:'login', component: LoginPageComponent},
    {path: 'hero', component: HeropageComponent},
    {path:'pre-login', component: PreLoginComponent},
    {path:'', redirectTo: '/login', pathMatch: 'full'},
    {path:'**', redirectTo: '/hero'}
];

