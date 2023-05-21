import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProjectPageComponent} from "./pages/project-page/project-page.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,

    },
    {
        path: 'project',
        component: ProjectPageComponent,

    },
    // {path: 'settings', component: SettingsPageComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'logout', component: LogoutComponent},
    // {path: 'notAuthorized', component: NotAuthorizedComponent},
    {path: '**', redirectTo: 'home'},

    // otherwise redirect to home
    {path: '', component: HomePageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
