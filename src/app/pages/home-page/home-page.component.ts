import {Component, OnInit} from '@angular/core';
import {ContextService} from "../../core/context/context.service";
import {Menu} from "../../shared/constants/menu";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private contextService: ContextService){
    this.contextService.setMenuIndex(Menu.MENU_HOME)
  }

  ngOnInit(): void {
    console.log("Home page!")
  }


}
