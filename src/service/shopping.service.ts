import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemDto} from "../model/item";
import {ShoppingTypeComponent} from "../app/house-control/shopping-type/shopping-type.component";
import {ShoppingDto, ShoppingTypeDto} from "../model/shopping";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private URL = "http://192.168.1.9:8080";

  constructor(private http: HttpClient) { }

  getShoppingType(id_house: string): Observable<ShoppingTypeDto>{
    return this.http.get<ShoppingTypeDto>(this.URL + "/shopping/type/" + id_house);
  }

  addShopping(shoppingDto: ShoppingDto): Observable<ShoppingDto>{
    return this.http.post<ShoppingDto>(this.URL + "/shopping/add", shoppingDto);
  }
  getShopping(id_house: string): Observable<ShoppingDto[]>{
    return this.http.get<ShoppingDto[]>(this.URL + "/shopping/" + id_house);
  }


}
