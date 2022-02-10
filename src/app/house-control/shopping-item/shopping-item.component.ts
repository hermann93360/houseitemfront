import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ShoppingDto} from "../../../model/shopping";
import {ItemDto} from "../../../model/item";
import {ItemService} from "../../../service/item.service";
import {ShoppingService} from "../../../service/shopping.service";
import {HouseService} from "../../../service/house.service";
import {ItemTemplateComponent} from "../item-template/item-template.component";
import {DOCUMENT} from "@angular/common";
import {FormBuilder} from "@angular/forms";
import {upAddAnimation} from "../../animations/animations";

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss', '../house-control.component.scss'],
  animations: [
    upAddAnimation
  ]
})
export class ShoppingItemComponent extends ItemTemplateComponent implements OnInit {

  public id_shopping: any = localStorage.getItem('id_shopping');
  public name = localStorage.getItem('name');

  public listItemShopping: ItemDto[] = []

  public findItemFromSearch: boolean = true;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private itemService: ItemService,
              private shoppingService: ShoppingService,
              private houseService: HouseService,
              @Inject(DOCUMENT) protected document: Document,
              protected formBuilder: FormBuilder) {
    super(document, formBuilder);
  }

  ngOnInit(): void {
    super.initFormItem();
    this.getItems();

  }

  generateList(){
    //@ts-ignore
        this.itemService.addItemInShoppingListGenerate(this.id_house, this.id_shopping).subscribe(
          (value) => {
            console.log(value)
          }
        )
  }

  displayFormItem(): void {
    super.displayFormItem()
  }

  getItems(): boolean {
    //@ts-ignore
    this.itemService.getItemsByShopping(this.id_shopping).subscribe(
      (value) => {
        this.listItemShopping = value.map((value: ItemDto) => {
          return {id_item: value.id_item, name: value.name, quantity: value.quantity}
        }).reverse()
      }
    )
    return true;
  }

  protected sendItem() {
    let itemDto: ItemDto = {
      name: this.formItem.value['name'],
      quantity: this.formItem.value['quantity'],
      id_shopping: this.id_shopping
    }

    console.log(itemDto)

    this.itemService.addItemInShopping(itemDto).subscribe(
      (value) =>{
        this.getItems();
      }
    );
  }

  searchItem(value: string){
    if(value !== ""){
      this.itemService.getItemsByNameAndShopping(this.id_shopping, value).subscribe(
        (value) => {
          if(value.length == 0){
            this.findItemFromSearch = false;
            this.listItemShopping = []
          }else{
            this.findItemFromSearch = true;

            this.listItemShopping = value.map((value: ItemDto) => {
              return {id_item: value.id_item, name: value.name, quantity: value.quantity}
            })
          }
        },
      )
    }else{
      this.getItems();
      this.findItemFromSearch = true;
    }
  }

}
