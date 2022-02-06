import { Component, OnInit } from '@angular/core';
import {fadeAnimation, upAnimation} from "../animations/animations";

@Component({
  selector: 'app-configure-house',
  templateUrl: './configure-house.component.html',
  styleUrls: ['./configure-house.component.scss', '../app.component.scss'],
  animations: [
    fadeAnimation,
    upAnimation
  ]
})
export class ConfigureHouseComponent implements OnInit {

  public displaySection: boolean = false;
  public up: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.up = true;
      setTimeout(() => {
        this.displaySection = true;
      }, 500)
    }, 1000)
  }

}
