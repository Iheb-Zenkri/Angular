import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeropageComponent } from './pages/heropage/heropage.component';
import { PreLoginComponent } from './pages/pre-login/pre-login.component';
import { authGuard } from './services/Guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { loggedInGuard } from './services/Guards/logged-in.guard';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RestrictAuthGuard } from './services/Guards/restrict-auth.guard';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

export const routes: Routes = [
    {path:'', component: HeropageComponent,canActivate: [RestrictAuthGuard], pathMatch: 'full'},

    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [loggedInGuard],
        children:[
            {path: 'home', component:HomePageComponent},
            {path: 'profile/:username', component:ProfilePageComponent},
            {path: 'projects/:username', component:ProjectsPageComponent},
        ]
    },

    {path:'pre-login', component: PreLoginComponent,canActivate: [RestrictAuthGuard]},
    {path:'login', component: LoginPageComponent, canActivate: [authGuard,RestrictAuthGuard]},
    {path:'**', redirectTo: ''}
];
