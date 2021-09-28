import { Item } from "../gilded-rose";
import { ItemHandler } from "../handler/item-handler";

export class CommonItem extends ItemHandler {
  updateQuality(item: Item): Item {
    if(item.sellIn <= 0){
      item.quality = Math.max(item.quality -2, this.MIN_QUALITY);
    } else {
      item.quality = Math.max(item.quality -1, this.MIN_QUALITY);
    }
    item.sellIn -1;
    return item;
  }
}