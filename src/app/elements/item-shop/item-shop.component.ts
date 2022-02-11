import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemService} from "../../../service/item.service";
import {HouseService} from "../../../service/house.service";
import {ShoppingService} from "../../../service/shopping.service";
import {ItemDto} from "../../../model/item";

@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.scss']
})
export class ItemShopComponent implements OnInit {

  @Input()
  public name: string = '';

  @Input()
  public quantity: string = '';

  @Input()
  public id_item: string = '';


  @Output()
  itemInBasket = new EventEmitter<any>();

  private itemDto!: ItemDto;


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


  allInBasket(){
    this.itemService.removeItem(this.id_item).subscribe(
      (value) => {
        this.itemInBasket.emit()
      }
    );
  }



}
