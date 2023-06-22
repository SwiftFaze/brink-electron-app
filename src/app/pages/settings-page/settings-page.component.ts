import { Component } from '@angular/core';
import {ContextService} from "../../core/context/context.service";
import {Menu} from "../../shared/constants/menu";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent {
  constructor(private contextService: ContextService){
    this.contextService.setMenuIndex(Menu.MENU_SETTINGS)
  }
}
