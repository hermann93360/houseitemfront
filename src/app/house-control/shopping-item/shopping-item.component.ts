import {Component, Inject, OnInit, QueryList, ViewChildren} from '@angular/core';
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
import {NavComponent} from "../../nav/nav.component";
import {ButtonComponent} from "../../elements/button/button.component";

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

  @ViewChildren(ButtonComponent) btn: QueryList<ButtonComponent> | undefined;

  public listItemShopping: ItemDto[] = []
  public listItemShoppingBuy: ItemDto[] = []

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
    this.getItemsBuy();

  }

  generateList(){
    this.btn?.forEach((acc) => {
      let load = "."
      acc.icone = "https://img.icons8.com/stickers/100/000000/spinner-frame-1.png"
      setInterval(()=>{
        acc.value = "" + load
        load = load + "."
        if(load.length == 4)
          load = "."
      }, 500)
    })
    //@ts-ignore
        this.itemService.addItemInShoppingListGenerate(this.id_house, this.id_shopping).subscribe(
          (value) => {
            console.log("fefe")
            this.getItems();
            this.getItemsBuy();
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

  getItemsBuy(){
    this.itemService.getItemsBuy(this.id_shopping).subscribe(
      (value) => {
        this.listItemShoppingBuy = value.map((value: ItemDto) => {
          return {id_item: value.id_item, name: value.name, quantity: value.quantity}
        }).reverse()
      }
    )
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

  receiptItemAddedOrRemoved(): void {
    this.getItems();
    this.getItemsBuy();
    console.log("emit")
  }


}
