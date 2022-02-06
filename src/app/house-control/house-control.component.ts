import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {routeAnimationFade} from "../animations/animations";

@Component({
  selector: 'app-house-control',
  templateUrl: './house-control.component.html',
  styleUrls: ['./house-control.component.scss'],
  animations: [
    routeAnimationFade
  ]
})
export class HouseControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
