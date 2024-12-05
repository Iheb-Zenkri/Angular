import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeropageComponent } from './pages/heropage/heropage.component';

export const routes: Routes = [
    {path:'login', component: LoginPageComponent},
    {path: 'hero', component: HeropageComponent},
    {path:'', redirectTo: '/login', pathMatch: 'full'},
    {path:'**', redirectTo: '/hero'}
];

