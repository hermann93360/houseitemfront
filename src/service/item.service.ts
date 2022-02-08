import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HouseDto} from "../model/house";
import {Observable} from "rxjs";
import {ItemDto} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private URL = "http://192.168.1.9:8080";

  constructor(private http: HttpClient) { }

  getItems(id_house: string): Observable<ItemDto[]>{
    return this.http.get<ItemDto[]>(this.URL + "/items/" + id_house);
  }

  getItemsByName(id_house: string, name: string): Observable<ItemDto[]>{
    return this.http.get<ItemDto[]>(this.URL + "/items/" + id_house + "/" + name);
  }

  getItemsShoppingTypeLIst(id_house: string): Observable<ItemDto[]>{
    return this.http.get<ItemDto[]>(this.URL + "/items/shopping/type/items/" + id_house);
  }

  getItemsByNameAndShoppingType(id_shopping: string, name: string): Observable<ItemDto[]>{
    return this.http.get<ItemDto[]>(this.URL + "/items/shopping/type/" + id_shopping + "/" + name);
  }

  addItem(itemDto: ItemDto): Observable<ItemDto>{
    return this.http.post<ItemDto>(this.URL + "/item/add", itemDto);
  }

  addItemInShoppingListType(itemDto: ItemDto): Observable<ItemDto>{
    return this.http.post<ItemDto>(this.URL + "/item/shopping/type/add", itemDto);
  }




}
