import { Component } from '@angular/core';
import {ContextService} from "../../core/context/context.service";
import {Menu} from "../../shared/constantes/menu";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  constructor(private contextService: ContextService){
    this.contextService.setMenuIndex(Menu.MENU_HOME)
  }


}
