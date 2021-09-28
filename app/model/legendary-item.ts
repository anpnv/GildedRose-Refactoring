import { Item } from "../gilded-rose";
import { ItemHandler } from "../handler/item-handler";

export class LegendaryItem extends ItemHandler {
  updateQuality(item: Item): Item {
    return item;
  }
}
