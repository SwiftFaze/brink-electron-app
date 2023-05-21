import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AppsContext} from './apps-context.model';


@Injectable({
    providedIn: 'root'
})
export class ContextService {

    private appsContext: AppsContext = new AppsContext();

    constructor() {
        this.initialize();
    }

    private initialize() {
        this.appsContext = new AppsContext();
    }


    public setMenuIndex(indexMenu: number) {
        this.appsContext.activeMenu = indexMenu;
    }


}
