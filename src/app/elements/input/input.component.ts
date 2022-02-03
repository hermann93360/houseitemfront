import {Component, Input, OnInit, Output, EventEmitter, Host, SkipSelf, Optional, forwardRef} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControlName,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

@Component({
  selector: 'fa-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @Input()
  public type: string = "";

  @Input()
  public placeholder: string = "";

  public className: string = "";

  public value: string = "";

  onChange: any = () => {};
  onTouched: any = () => {};
  disabled = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  changeValue(event: string): void{
    this.value = event;
    this.onChange(event);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validator(value: string): void{

    if(value.length == 0){
      this.changeAppearanceInputError();
    }
    else{
      this.changeAppearanceInputValid();
    }
  }

  changeAppearanceInputError():void{
    this.className = 'error-input';
  }

  changeAppearanceInputValid():void{
    this.className = '';
  }

}
