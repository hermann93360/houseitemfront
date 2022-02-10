import { Component, OnInit } from '@angular/core';
import {bgAnimation, fadeAnimation, navAnimation, navButtonAnimation} from "../animations/animations";
import {HouseService} from "../../service/house.service";
import {Router} from "@angular/router";

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


  constructor(private router: Router, private houseService: HouseService) { }

  ngOnInit(): void {
  }

  displayNavigation(): void{
    this.displayNav = !this.displayNav;
  }

  logoutHouse(){
    this.houseService.logoutHouse();
    this.router.navigate(['/access/connect'])
  }
}
