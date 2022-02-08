import {Component, Inject, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ItemDto} from "../../../model/item";
import {InputComponent} from "../../elements/input/input.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DOCUMENT} from "@angular/common";
import {jitOnlyGuardedExpression} from "@angular/compiler/src/render3/util";

@Component({
  selector: 'app-item-template',
  templateUrl: './item-template.component.html',
  styleUrls: ['./item-template.component.scss']
})
export class ItemTemplateComponent implements OnInit {

  public id_house = localStorage.getItem('identificationID') ?? '';

  public items: ItemDto[] = [];

  public displayFormAddItem: boolean = false;

  public obs: any;

  @ViewChildren(InputComponent) inputAdd: QueryList<InputComponent> | undefined;


  //@ts-ignore
  public formItem: FormGroup;

  constructor(@Inject(DOCUMENT) protected document: Document, protected formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getItems();
    this.initFormItem();
  }


  protected initFormItem(): void{
    this.formItem = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  protected displayFormItem(){
    this.displayFormAddItem = !this.displayFormAddItem;
    if(this.displayFormAddItem){
      this.document.body.classList.add('scrollNone')
    }else{
      this.document.body.classList.remove('scrollNone')

    }
  }

  protected sendItem(){
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

    this.sendItem();
    this.formItem.reset();

  }


  getItems(): boolean{
    return false;
  }

}
