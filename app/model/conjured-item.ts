import { Item } from "../gilded-rose";
import { ItemHandler } from "../handler/item-handler";

export class ConjuredItem extends ItemHandler {
  updateQuality(item: Item): Item {
    item.quality = Math.max(item.quality - 2, this.MIN_QUALITY);
    item.sellIn -=1;
    return item;
  }
}
