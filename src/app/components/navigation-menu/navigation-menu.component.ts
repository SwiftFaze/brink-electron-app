import {Component, EventEmitter, Output} from '@angular/core';
import {Menu} from "../../shared/constantes/menu";
import {Router} from '@angular/router';
import {SideNavRoute} from "../../models/menu";
import {ConfigService} from "../../shared/config.service";

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {
    @Output() changeRoute = new EventEmitter<string>();

    constructor(private router: Router,
                private configService: ConfigService) {
    }


    ngOnInit(): void {
        this.loadNavListItems().then();
    }

    public myMenuRoutes: SideNavRoute[] = [];

    async loadNavListItems(): Promise<void> {
        await this.configService.get('menu').subscribe(menu => {
            this.myMenuRoutes = menu;
            console.log(this.myMenuRoutes)
        });

    }


    goToPage(route: string) {
        this.router.navigate([route]).then();
        console.log(route)
        this.changeRoute.emit(route);
    }


    gotoPage(pageUrl: string): void {
        this.router.navigate([pageUrl]).then();
        this.changeRoute.emit(pageUrl);
    }
}
