import { Item } from "../gilded-rose";
import { ItemHandler } from "../handler/item-handler";

export class BackstagePassesItem extends ItemHandler {
  updateQuality(item: Item): Item {
    if (item.sellIn <= 0) {
      item.quality = 0;
    }
    if (item.sellIn <= 5) {
      item.quality = Math.min(item.quality + 3, this.MAX_QUALITY);
    }
    if (item.sellIn <= 10) {
      item.quality = Math.min(item.quality + 2, this.MAX_QUALITY);
    } else {
      item.quality = Math.min(item.quality + 1, this.MAX_QUALITY);
    }
    item.sellIn -= 1;
    return item;
  }
}
