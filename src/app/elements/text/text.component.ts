import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'fa-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input()
  public title: string = "";

  @Input()
  public titleImg: string = "";

  @Input()
  public text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
