import { Item } from "../gilded-rose";
import { ItemHandler } from "../handler/item-handler";

export class AgedBrieItem extends ItemHandler {
  updateQuality(item: Item): Item {
    
    if (item.sellIn <= 0) {
      item.quality = Math.min(item.quality + 2, this.MAX_QUALITY);
    } else {
      item.quality = Math.min(item.quality + 1, this.MAX_QUALITY);
    }
    item.sellIn -= 1;   
    
    return item;
  }
}
