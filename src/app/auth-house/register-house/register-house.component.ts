import {
  Component,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {InputComponent} from "../../elements/input/input.component";
import {fadeAnimation} from "../../animations/animations";
import {HouseService} from "../../../service/house.service";
import {HouseDto} from "../../../model/house";

@Component({
  selector: 'app-register-house',
  templateUrl: './register-house.component.html',
  styleUrls: ['./register-house.component.scss', '../auth-house.component.scss', '../../app.component.scss'],
  animations: [
    fadeAnimation
  ]

})
export class RegisterHouseComponent implements OnInit {

  public addHouseForm!: FormGroup;

  public displayErrorForm: boolean = false;
  public errorEmptyCase: boolean = false;
  public errorCodeDifferent: boolean = false;

  @ViewChildren(InputComponent) inputSubmit: QueryList<InputComponent> | undefined;

  constructor(private formBuilder: FormBuilder, public router: Router, private houseService: HouseService) {

  }

  ngOnInit(): void {
    this.initFormAddHouse();
  }


  initFormAddHouse(): void{
    this.addHouseForm = this.formBuilder.group({
      name: ['', Validators.required],
      houseCode: ['', Validators.required],
      confirmation: ['', Validators.required]
    })
  }

  addHouse(): void{
    if(this.addHouseForm.valid){
      const values = this.addHouseForm.value;
      if(values['houseCode'] === values['confirmation']){

        const houseDto = new HouseDto(
          values['houseCode'],
          values['name']
        )

        this.houseService.addHouse(houseDto).subscribe(
          (value) => {
            console.log(value);
          }
        )
      }else{
        this.inputSubmit?.forEach(
          (acc) => acc.changeAppearanceInputError()
        )

        this.displayErrorForm = true;
        this.errorCodeDifferent = true;
        this.errorEmptyCase = false;

      }
    }else{
      this.inputSubmit?.forEach(
        (acc) => acc.changeAppearanceInputError()
      )
      this.displayErrorForm = true;
      this.errorEmptyCase = true;
      this.errorCodeDifferent = false;

    }

  }

}
