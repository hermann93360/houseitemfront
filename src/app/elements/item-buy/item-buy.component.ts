import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemService} from "../../../service/item.service";
import {HouseService} from "../../../service/house.service";
import {ShoppingService} from "../../../service/shopping.service";
import {ItemDto} from "../../../model/item";

@Component({
  selector: 'app-item-buy',
  templateUrl: './item-buy.component.html',
  styleUrls: ['./item-buy.component.scss']
})
export class ItemBuyComponent implements OnInit {

  @Input()
  public name: string = '';

  @Input()
  public quantity: string = '';

  @Input()
  public id_item: string = '';

  @Input()
  public id_shopping: string = '';

  private itemDto!: ItemDto;

  @Output()
  itemRemoveToBasket = new EventEmitter<any>();


  constructor(private itemService: ItemService,
              private houseService: HouseService,
              private shoppingService: ShoppingService
  ) {
  }
  ngOnInit(): void {
    this.itemDto = new ItemDto(
      this.name,
      this.quantity,
      this.id_item,
      this.id_shopping
    )
  }

  removeBasquet(){
    console.log(this.itemDto)
    this.itemService.addItemInShopping(this.itemDto).subscribe(
      (value) => {
        this.itemRemoveToBasket.emit();
      }
    );
  }

}
