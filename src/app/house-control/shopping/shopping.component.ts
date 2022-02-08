import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {popAnimation, windowAnimation} from "../../animations/animations";
import {ShoppingDto} from "../../../model/shopping";
import {ShoppingService} from "../../../service/shopping.service";

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss', '../house-control.component.scss'],
  animations: [
    popAnimation,
    windowAnimation
  ]
})
export class ShoppingComponent implements OnInit {

  public id_house = localStorage.getItem('identificationID') ?? '';

  public displayFormAddShopping = false;

  public formAddShopping!: FormGroup;

  public listShopping: ShoppingDto[] = [];

  public displayShoppingList: boolean = false;

  constructor(private shoppingService: ShoppingService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFormAddShopping();
    this.getShopping();
  }

  getShopping(): void{
    this.shoppingService.getShopping(this.id_house).subscribe(
      (value) => {
        this.listShopping = value.map((value: ShoppingDto) => {
          return {name: value.name, id_shopping: value.id_shopping}
        })
        console.log(value)
      }
    )
  }

  initFormAddShopping(): void{
    this.formAddShopping = this.formBuilder.group({
      name: ['', Validators.required]
    })
  }

  displayForm(): void{
    this.displayFormAddShopping = !this.displayFormAddShopping;
  }

  addShopping(): void{
    if(this.formAddShopping.valid){
      const shoppingDto: ShoppingDto = {
        id_house: this.id_house,
        name: this.formAddShopping.value['name']
      }

      this.shoppingService.addShopping(shoppingDto).subscribe(
        (value) => {
          console.log(value)
          this.displayForm();
        }
      )

    }
  }
  displayList(){
    this.displayShoppingList = !this.displayShoppingList;
  }

  searchItem(value: string){

  }

}
