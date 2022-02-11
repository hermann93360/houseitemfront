import { Component, OnInit } from '@angular/core';
import {bgAnimation, navAnimation, navButtonAnimation} from "../../animations/animations";

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.scss'],
  animations: [
    navAnimation,
    navButtonAnimation,
    bgAnimation
  ]
})
export class NavHomeComponent implements OnInit {

  public displayNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  displayNavigation(): void{
    console.log("fezf")
    this.displayNav = !this.displayNav;
  }

}
