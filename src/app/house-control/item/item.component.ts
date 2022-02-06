import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  public name: string = '';

  @Input()
  public quantity: string = '';

  @Input()
  public id_item: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
