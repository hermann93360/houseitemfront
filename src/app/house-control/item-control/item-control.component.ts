import {Component, Inject, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ItemService} from "../../../service/item.service";
import {ItemDto} from "../../../model/item";
import {query} from "@angular/animations";
import {upAddAnimation} from "../../animations/animations";
import {DOCUMENT} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {InputComponent} from "../../elements/input/input.component";
import {ShoppingService} from "../../../service/shopping.service";
import {analyzeAndValidateNgModules} from "@angular/compiler";

@Component({
  selector: 'app-item-control',
  templateUrl: './item-control.component.html',
  styleUrls: ['./item-control.component.scss', '../house-control.component.scss'],
  animations: [
    upAddAnimation
  ]
})
export class ItemControlComponent implements OnInit {

  public id_house = localStorage.getItem('identificationID') ?? '';

  public items: ItemDto[] = [];

  public displayFormAddItem: boolean = false;

  public obs: any;

  public displayAlertShoppingType = false;

  @ViewChildren(InputComponent) inputAdd: QueryList<InputComponent> | undefined;


  //@ts-ignore
  public formItem: FormGroup;

  constructor(private itemService: ItemService, private shoppingService: ShoppingService, @Inject(DOCUMENT) private document: Document, private formBuilder: FormBuilder) {
    this.shoppingService.getShoppingType(this.id_house).subscribe(
      (value) => {
        if(value == null)
          this.displayAlertShoppingType = true;
      }
    )
  }

  ngOnInit(): void {
    this.getItems();
    this.initFormItem();
  }

  getItems(): boolean{
    this.obs = this.itemService.getItems(this.id_house).subscribe(
      (value) => {
        this.items = value.map((value: ItemDto) => {
          return {id_item: value.id_item, name: value.name, quantity: value.quantity}
        })
      })

    return true;
  }

  private initFormItem(): void{
    this.formItem = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  displayFormItem(){
    this.displayFormAddItem = !this.displayFormAddItem;
    if(this.displayFormAddItem){
      this.document.body.classList.add('scrollNone')
    }else{
      this.document.body.classList.remove('scrollNone')

    }
  }

  addItem(target: any): void{

    console.log(target)

    if(!this.formItem.valid){
      this.inputAdd?.forEach(
        (acc) => {
          if(acc.identification === 'addButton'){
            acc.changeAppearanceInputError()
          }
        }
      )
      return;
    }


    let itemDto: ItemDto = {
      name: this.formItem.value['name'],
      quantity: this.formItem.value['quantity'],
      id_house: this.id_house
    }

    console.log(itemDto)

    this.itemService.addItem(itemDto).subscribe(
      (value) =>{
        this.getItems()
      }
    );
    this.formItem.reset();

  }

  searchItem(value: string){
    this.itemService.getItemsByName(this.id_house, value).subscribe(
      (value) => {
        if(value.length == 0 ){
          this.getItems();
        }
        else{
          this.items = value.map((value: ItemDto) => {
            return {id_item: value.id_item, name: value.name, quantity: value.quantity}
          })
        }
      },
      error => {
        this.getItems();
      }
    )
  }

}
