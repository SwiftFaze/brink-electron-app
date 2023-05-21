import { Component } from '@angular/core';
import {ContextService} from "../../core/context/context.service";
import {Menu} from "../../shared/constantes/menu";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent {
  constructor(private contextService: ContextService){
    this.contextService.setMenuIndex(Menu.MENU_PROJECTS)
  }








}
