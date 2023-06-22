import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavigationMenuComponent} from './components/navigation-menu/navigation-menu.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ProjectPageComponent} from './pages/project-page/project-page.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from '@angular/common';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationMenuComponent,
        HomePageComponent,
        ProjectPageComponent,
        SettingsPageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        AppRoutingModule,
        MatSidenavModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
