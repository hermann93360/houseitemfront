import {Component, Inject, QueryList, ViewChildren} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {fadeAnimation, routeAnimationFade, routeAuthHouseAnimamtion} from "./animations/animations";
import {InputComponent} from "./elements/input/input.component";
import {NavComponent} from "./nav/nav.component";
import {DOCUMENT} from "@angular/common";



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

  @ViewChildren(NavComponent) nav: QueryList<NavComponent> | undefined;


  constructor(@Inject(DOCUMENT) protected document: Document) {
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  disHidNav(){
    this.nav?.forEach(
      (acc) => acc.displayNav = false
    )
  }
}
