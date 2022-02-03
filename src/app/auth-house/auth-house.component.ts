import {Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";
import {routeAuthHouseAnimamtion} from "../animations/animations";


@Component({
  selector: 'app-auth-house',
  templateUrl: './auth-house.component.html',
  styleUrls: ['./auth-house.component.scss', '../app.component.scss'],
  animations: [
    routeAuthHouseAnimamtion
  ]
})
export class AuthHouseComponent implements OnInit {

  constructor(public router: Router, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
