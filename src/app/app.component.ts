import { Component } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {fadeAnimation, routeAnimationFade, routeAuthHouseAnimamtion} from "./animations/animations";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeAnimationFade
  ]
})
export class AppComponent {
  title = 'houseitemfront';

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
