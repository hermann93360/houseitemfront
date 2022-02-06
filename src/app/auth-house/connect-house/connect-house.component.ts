import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {InputComponent} from "../../elements/input/input.component";
import {fadeAnimation} from "../../animations/animations";
import {HouseDto} from "../../../model/house";
import {HouseService} from "../../../service/house.service";

@Component({
  selector: 'app-connect-house',
  templateUrl: './connect-house.component.html',
  styleUrls: ['./connect-house.component.scss', '../auth-house.component.scss', '../../app.component.scss'],
  animations:[
    fadeAnimation
  ]
})
export class ConnectHouseComponent implements OnInit {

  //@ts-ignore
  public connectHouseForm: FormGroup;

  //@ts-ignore
  public values: string;

  public displayErrorForm: boolean = false;
  public errorConnect: boolean = false;
  public errorEmptyCase: boolean = false;

  @ViewChildren(InputComponent) inputSubmit: QueryList<InputComponent> | undefined;


  constructor(private formBuilder: FormBuilder, public router: Router, private houseService: HouseService) { }

  ngOnInit(): void {
    this.initFormAddHouse();
  }

  initFormAddHouse(): void{
    this.connectHouseForm = this.formBuilder.group({
      name: ['', Validators.required],
      houseCode: ['', Validators.required]
    })
  }

  connectHouse(): void{
    if(this.connectHouseForm.valid){
      const values = this.connectHouseForm.value;

      const houseDto = new HouseDto(
        values['houseCode'],
        values['name']
      )

      this.houseService.connectHouse(houseDto).subscribe(
        (value) => {
          this.houseService.saveIdHouse(value);
        },
        (error) => {
          this.errorInForm();
          this.errorEmptyCase = false;
          this.errorConnect = true;
        }
      )
    }else{
      this.errorInForm();
      this.errorEmptyCase = true;
      this.errorConnect = false
    }
  }

  errorInForm(): void{
    this.displayErrorForm = true;
    this.inputSubmit?.forEach(
      (acc) => acc.changeAppearanceInputError()
    )
  }

}
