import {Component, Input, OnInit} from '@angular/core';
import {ItemService} from "../../../service/item.service";
import {ItemDto} from "../../../model/item";
import {HouseService} from "../../../service/house.service";
import {fadeItemRemoveAnimation} from "../../animations/animations";
import {ShoppingService} from "../../../service/shopping.service";
import {ShoppingDto} from "../../../model/shopping";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [
    fadeItemRemoveAnimation
  ]
})
export class ItemComponent implements OnInit {

  @Input()
  public name: string = '';

  @Input()
  public quantity: string = '';

  @Input()
  public id_item: string = '';

  private itemDto!: ItemDto;

  public itemRemoved: boolean = false;

  constructor(private itemService: ItemService,
              private houseService: HouseService,
              private shoppingService: ShoppingService
    ) {
  }

  ngOnInit(): void {
    this.itemDto = new ItemDto(
      this.name,
      this.quantity,
      this.id_item
    )
  }

  addOneItem(){
    const quantity: number = +this.itemDto.quantity + 1;
    this.itemDto.quantity = quantity.toString();
    this.quantity = quantity.toString();

    this.itemService.updateItem(this.id_item ,this.itemDto).subscribe()
  }

  removeOneItem(){
    const quantity: number = +this.itemDto.quantity - 1;
    this.itemDto.quantity = quantity.toString();
    this.quantity = quantity.toString();

    if(quantity > 0)
      this.itemService.updateItem(this.id_item ,this.itemDto).subscribe();
    else {
      this.itemRemoved = true;
      this.deleteItem(this.id_item);
    }

  }

  addItemRemovedInShopping(){
    this.shoppingService.getShopping(this.houseService.getIdHouse()).subscribe(
      (value) => {
        if(value == null || value == []){
          console.log("1")
          const shoppingDto: ShoppingDto = new ShoppingDto(
            "COURSE",
            this.houseService.getIdHouse()
          )
          this.shoppingService.addShopping(shoppingDto).subscribe(
            (value)=>{
              const itemDto: ItemDto = {
                name: this.name,
                quantity: this.quantity + 1,
                id_shopping: value.id_shopping
              }

              this.itemService.addItemInShopping(itemDto).subscribe(
                (value) => {
                  console.log(value);
                }
              )
            }
          )
        }else{
          const itemDto: ItemDto = {
            name: this.name,
            quantity: this.quantity + 1,
            id_shopping: value[value.length-1].id_shopping
          }
          this.itemService.addItemInShopping(itemDto).subscribe(
            (value) => {
              console.log(value);

            }
          )
        }
      }
    )
  }

  deleteItem(id_item: string){
    this.itemService.removeItem(id_item).subscribe();
  }

}
