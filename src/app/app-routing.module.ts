import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { IsLoggedInGuard } from './_shared/isLoggedIn.gurd';
import { HomeComponent } from './demo/components/home/home.component';
import { LoginComponent } from './demo/components/login/login.component';
import { SignupComponent } from './demo/components/signup/signup.component';
import { ProfileComponent } from './demo/components/profile/profile.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component:HomeComponent },
            { path: 'login', component:LoginComponent },
            { path: 'signup', component:SignupComponent },
            { path: 'profile', component:ProfileComponent },
            {
                path: 'dashboard', component: AppLayoutComponent,
                children: [
                    // { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[IsLoggedInGuard] },
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'upload', loadChildren: () => import('./demo/components/files/file/file.module').then(m => m.FileModule) },
                    { path: 'trainer', loadChildren: () => import('./demo/components/trainers/trainers.module').then(m => m.TrainersModule) },
                    { path: 'companies', loadChildren: () => import('./demo/components/companies/companies.module').then(m => m.CompaniesModule) },
                    { path: 'sessions', loadChildren: () => import('./demo/components/sessions/sessions.module').then(m => m.SessionsModule) },
                    { path: 'costs', loadChildren: () => import('./demo/components/costs/costs.module').then(m => m.CostsModule) },
                    { path: 'participant', loadChildren: () => import('./demo/components/participant/participant.module').then(m => m.ParticipantModule) },
                    { path: 'training-registration', loadChildren: () => import('./demo/components/training-registration/training-registration.module').then(m => m.TrainingRegistrationModule) },
                    { path: 'evaluation', loadChildren: () => import('./demo/components/evaluation/evaluation.module').then(m => m.EvaluationModule) },
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: '', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'participant', loadChildren: () => import('./demo/components/participant/participant.module').then(m => m.ParticipantModule) },


            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
