export class ItemDto{
  constructor(
    public name: string,
    public quantity: string,
    public id_item?: string,
    public id_house?: string,
    public id_shopping?: string,
  ) {}
}
