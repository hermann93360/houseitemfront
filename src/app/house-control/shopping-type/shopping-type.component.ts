import {Component, Inject, OnInit} from '@angular/core';
import {ItemDto} from "../../../model/item";
import {ItemService} from "../../../service/item.service";
import {ItemTemplateComponent} from "../item-template/item-template.component";
import {DOCUMENT} from "@angular/common";
import {FormBuilder} from "@angular/forms";
import {upAddAnimation} from "../../animations/animations";
import {ShoppingService} from "../../../service/shopping.service";

@Component({
  selector: 'app-shopping-type',
  templateUrl: './shopping-type.component.html',
  styleUrls: ['./shopping-type.component.scss', '../house-control.component.scss'],
  animations: [
    upAddAnimation
  ]
})
export class ShoppingTypeComponent extends ItemTemplateComponent implements OnInit{

  public shoppingTypeList: ItemDto[] = [];

  public id_shoppingType!: string;
  public id_house: string;

  public findItemFromSearch: boolean = true;


  constructor(private itemService: ItemService, private shoppingService: ShoppingService, @Inject(DOCUMENT) protected document: Document, protected formBuilder: FormBuilder) {
    super(document, formBuilder);
    this.id_house = localStorage.getItem('identificationID') ?? ''
    this.shoppingService.getShoppingType(this.id_house).subscribe(
      (value)=>{
        this.id_shoppingType = value.id_shoppingType;
        console.log(this.id_shoppingType)
      }
    )
  }

  ngOnInit(): void {
    super.initFormItem();
    this.getItems();
    setTimeout(()=>{
      console.log((this.shoppingTypeList))
    }, 1000);
  }

  displayFormItem(): void {
    super.displayFormItem()
  }

  getItems(): boolean {
    this.itemService.getItemsShoppingTypeLIst(this.id_house).subscribe(
      (value) => {
        this.shoppingTypeList = value.map((value: ItemDto) => {
          return {id_item: value.id_item, name: value.name, quantity: value.quantity}
        })
      }
    )
    return true;
  }

  protected sendItem() {
    let itemDto: ItemDto = {
      name: this.formItem.value['name'],
      quantity: this.formItem.value['quantity'],
      id_shopping: this.id_shoppingType
    }

    console.log(itemDto)

    this.itemService.addItemInShoppingListType(itemDto).subscribe(
      (value) =>{
        this.getItems()
      }
    );
  }

  addItem(target: any) {
    super.addItem(target);
  }

  searchItem(value: string){
    if(value !== ""){
      this.itemService.getItemsByNameAndShoppingType(this.id_shoppingType, value).subscribe(
        (value) => {
          if(value.length == 0){
            this.findItemFromSearch = false;
            this.shoppingTypeList = []
          }else{
            this.findItemFromSearch = true;

            this.shoppingTypeList = value.map((value: ItemDto) => {
              return {id_item: value.id_item, name: value.name, quantity: value.quantity}
            })
          }
        },
      )
    }else{
      this.getItems();
    }

  }
}
