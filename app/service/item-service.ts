import { Item } from "../gilded-rose";
import { ItemHandler } from "../handler/item-handler";


export class ItemService {
  constructor(private _itemInterface: ItemHandler) {}

  set itemUpdate(itemUpdate: ItemHandler) {
    this._itemInterface = itemUpdate;
  }

  get itemUpdate(): ItemHandler {
    return this._itemInterface;
  }

  updateQuality(item: Item): Item {
    return this._itemInterface.updateQuality(item);
  }
}
