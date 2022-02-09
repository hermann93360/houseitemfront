import { Component, OnInit } from '@angular/core';
import {bgAnimation, fadeAnimation, navAnimation, navButtonAnimation} from "../animations/animations";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    navAnimation,
    navButtonAnimation,
    bgAnimation
  ]
})
export class NavComponent implements OnInit {

  public displayNav:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayNavigation(): void{
    this.displayNav = !this.displayNav;
  }

}
