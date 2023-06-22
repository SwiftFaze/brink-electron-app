import {Component, OnInit} from '@angular/core';
import {ContextService} from "../../core/context/context.service";
import {Menu} from "../../shared/constants/menu";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit  {
  constructor(private contextService: ContextService){
    this.contextService.setMenuIndex(Menu.MENU_PROJECTS)
  }


  ngOnInit(): void {
    console.log("Project page!")
  }





}
