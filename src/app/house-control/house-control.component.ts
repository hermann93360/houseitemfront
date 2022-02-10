import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {routeAnimationFade} from "../animations/animations";
import {InputComponent} from "../elements/input/input.component";
import {NavComponent} from "../nav/nav.component";

@Component({
  selector: 'app-house-control',
  templateUrl: './house-control.component.html',
  styleUrls: ['./house-control.component.scss'],
  animations: [
    routeAnimationFade
  ]
})
export class HouseControlComponent implements OnInit {
  @ViewChildren(NavComponent) nav: QueryList<NavComponent> | undefined;


  constructor() { }

  ngOnInit(): void {
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
