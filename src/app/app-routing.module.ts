import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProjectPageComponent} from "./pages/project-page/project-page.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {SettingsPageComponent} from "./pages/settings-page/settings-page.component";

const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'project', component: ProjectPageComponent},
    {path: 'settings', component: SettingsPageComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'logout', component: LogoutComponent},
    // {path: 'notAuthorized', component: NotAuthorizedComponent},

    // otherwise redirect to home
    {path: '', component: HomePageComponent},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    exports: [RouterModule, CommonModule]
})
export class AppRoutingModule {
}
