import { Component, OnInit } from '@angular/core';
import {bgAnimation, navAnimation, navButtonAnimation} from "../animations/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    navAnimation,
    navButtonAnimation,
    bgAnimation
  ]
})
export class HomeComponent implements OnInit {

  public displayNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  displayNavigation(): void{
    console.log("fezf")
    this.displayNav = !this.displayNav;
  }
}
