import { ItemService } from './service/item-service';
import { ConjuredItem } from './model/conjured-item';
import { BackstagePassesItem } from './model/backstage-passes-item';
import { LegendaryItem } from './model/legendary-item';
import { AgedBrieItem } from './model/aged-brie-item';
import { ItemHandler } from "./handler/item-handler";
import { CommonItem } from './model/common-item';

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    private _itemType: {[name: string]: ItemHandler} = {
        "Aged Brie" : new AgedBrieItem(),
        "Legendary": new LegendaryItem(),
        "Backstage" : new BackstagePassesItem(),
        "Common": new CommonItem(),
        "Conjured": new ConjuredItem(),
    }

    private _itemService : ItemService = new ItemService(this._itemType["Common"]);

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() { 
        return this.items.map((item: Item) => {
            if (item.name.includes("Sulfuras")) {
                this._itemService.itemUpdate = this._itemType["Legendary"];
              } else if (item.name.includes("Aged Brie")) {
                this._itemService.itemUpdate = this._itemType["Aged Brie"];
              } else if (item.name.includes("Backstage")) {
                this._itemService.itemUpdate = this._itemType["Backstage"];
              } else if (item.name.includes("Conjured")) {
                this._itemService.itemUpdate = this._itemType["Conjured"];
              } else {
                this._itemService.itemUpdate = this._itemType["Common"];
              }
              return this._itemService.updateQuality(item);
        });
    }
}
