import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {HouseService} from "../house.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormAuthGuardService implements CanActivate{

  constructor(private router: Router, private houseService: HouseService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.houseService.isConnect())
      return true;
    else
      this.router.navigate(['houseControl/item'])

    return false;
  }
}
