import {Component, isDevMode, EventEmitter, NgModule, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ConfigService} from "../../shared/config.service";
import {menuNav} from "../../models/menu-nav";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {
    @Output() changeRoute = new EventEmitter<string>();
    environment = environment
    isDevMode = isDevMode();

    constructor(private router: Router,
                private configService: ConfigService) {
    }


    ngOnInit(): void {
        this.loadNavListItems().then();
    }

    public myMenuRoutes: menuNav[] = [];

    async loadNavListItems(): Promise<void> {
        await this.configService.get('menu').subscribe(menu => {
            this.myMenuRoutes = menu;
            console.log(this.myMenuRoutes)
        });

    }


    goToPage(menuNav: menuNav): void {
        this.router.navigate([menuNav.route]).then();
        this.changeRoute.emit(menuNav.route);
        console.log(menuNav.route)
    }


    getCssMenuItem(item: menuNav): string {
        switch (item.type) {
            case 0:
                return "left-menu-item";
            case 1:
                return "center-menu-item";
            case 2:
                return "right-menu-item";
            default:
                return "left-menu-item"
        }
    }
}
