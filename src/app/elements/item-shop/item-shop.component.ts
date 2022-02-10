import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-shop',
  templateUrl: './item-shop.component.html',
  styleUrls: ['./item-shop.component.scss']
})
export class ItemShopComponent implements OnInit {

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
