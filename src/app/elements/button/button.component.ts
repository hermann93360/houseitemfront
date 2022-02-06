import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fa-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', '../../app.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  public value: string = "";

  @Input()
  public icone: string = "";

  @Input()
  public router: string = "";

  @Input()
  public disabledButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
