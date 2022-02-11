import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HouseDto} from "../model/house";
import {Observable} from "rxjs";
import {ItemDto} from "../model/item";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private URL = environment.URL;

  public shoppingList: ItemDto[] = [];


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

  getItemsByNameAndShopping(id_shopping: string, name: string): Observable<ItemDto[]>{
    return this.http.get<ItemDto[]>(this.URL + "/items/shopping/" + id_shopping + "/" + name);
  }

  getItemsByShopping(id_shopping: string): Observable<ItemDto[]>{
    return this.http.get<ItemDto[]>(this.URL + "/items/shopping/" + id_shopping);
  }

  getItemsBuy(id_shopping: string): Observable<ItemDto[]>{
    return this.http.get<ItemDto[]>(this.URL + "/items/buy/" + id_shopping);
  }

  addItem(itemDto: ItemDto): Observable<ItemDto>{
    return this.http.post<ItemDto>(this.URL + "/item/add", itemDto);
  }

  addItemInShoppingListType(itemDto: ItemDto): Observable<ItemDto>{
    return this.http.post<ItemDto>(this.URL + "/item/shopping/type/add", itemDto);
  }

  addItemInShopping(itemDto: ItemDto): Observable<ItemDto>{
    return this.http.post<ItemDto>(this.URL + "/item/shopping/add", itemDto);
  }


  addItemInShoppingListGenerate(id_house: string, id_shopping: string): Observable<ItemDto[]>{
    return this.http.get<ItemDto[]>(this.URL + "/item/shopping/generate/" + id_house + "/" + id_shopping);
  }

  updateItem(id_item: string, itemDto: ItemDto): Observable<ItemDto>{
    return this.http.put<ItemDto>(this.URL + "/items/" + id_item, itemDto);
  }

  removeItem(id_item: string): Observable<ItemDto>{
    return this.http.delete<ItemDto>(this.URL + "/items/" + id_item);
  }

  loadShoppingList(id_shopping: string){
    this.getItemsByShopping(id_shopping).subscribe(
      (value) => {
        this.shoppingList = value.map((value: ItemDto) => {
          return {id_item: value.id_item, name: value.name, quantity: value.quantity}
        }).reverse()
      }
    )
  }



}
