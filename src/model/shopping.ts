export class ShoppingTypeDto{
  constructor(
    public id_shoppingType: string,
    public name: string,
    public id_house?: string,
  ) {}
}

export class ShoppingDto{
  constructor(
    public name: string,
    public id_house?: string,
    public id_shopping?: string,
    public numberItem?: number,
    public numberItemInBask?: number
  ) {}
}
