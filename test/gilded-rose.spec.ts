import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('Should return an array after calling UpdateQuality', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0),new Item('bar', 0, 0),new Item('baz', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(Array.isArray(items)).to.equal(true);
    });

  

    describe('Special items', () => {

        describe('_Aged brie ', () => {
            it("Should decrease the sellIn", () => {
                const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 2) ]);
                const items = gildedRose.updateQuality();
                expect(items[0].sellIn).to.equal(-1);
            });

            it("Should increase the quality", () => {
                const gildedRose = new GildedRose([ new Item('Aged Brie', 20, 20) ]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).to.equal(21);
            });

            it("Should increase the quality by 2 if the sellIn <= 0 (sell by date has passed) ", () => {
                const gildedRose = new GildedRose([ new Item('Aged Brie', -1, 20) ]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).to.equal(22);
            });

            it("should never have a quality over 50 even with a lower sellIn", () => {
                const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 50) ]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).to.equal(50);
            });


            
        });

        describe('_Sulfuras', () => {
            it("Should never decrease the sellIn", () => {
                const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
                const items = gildedRose.updateQuality();
                expect(items[0].sellIn).to.equal(5);
            });

            it("Should never decrease the quality", () => {
                const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).to.equal(80);
            });

        });
        
        describe('_Backstage passes', () => {
            it('should decrease the sellIn', () => {
                const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 2)]);
                const items = gildedRose.updateQuality();
                expect(items[0].sellIn).to.equal(-1);
            });

            it('should increase the quality by 1 if the sellIn > 10', () => {
                const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).to.equal(11);
            });

            it('should increase the quality by 2 if the sellIn < 10', () => {
                const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 8, 6)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).to.equal(8);
            });

            it('should increase the quality by 3 if the sellIn < 5', () => {
                const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).to.equal(13);
            });

            it('should never have a quality over 50 even with a lower sellIn', () => {
                const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 8, 50)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).to.equal(50);
            });

            it('should set the quality to 0 if the sellIn <= 0 (the sell by date has passed)', () => {
                const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 0)]);
                const items = gildedRose.updateQuality();
                expect(items[0].quality).to.equal(0);
            });
            
        })

    });

    describe('Common items', () => {
        it('should decrease the sellIn', () => {
            const gildedRose = new GildedRose([new Item('foo', 9, 4),]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).to.equal(8);
        });

        it('should decrease the quality', () => {
            const gildedRose = new GildedRose([new Item('foo', 9, 4),]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(3);
        });

        it('should decrease the quality by 2 if the sellIn <= 0 (the sell by date has passed)', () => {
            const gildedRose = new GildedRose([new Item('foo', 0, 4),]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(2);
        });

        it('should never have a negative quality', () => {
            const gildedRose = new GildedRose([new Item('foo', -5, 1),]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });

        
    });

    describe('Conjured items', () => {
        it('Sould decrease the sellIn', () => {
            const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 0, 2) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].sellIn).to.equal(-1);
        });

        it('Sould decrease the quality', () => {
            const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 0, 5) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(3);
        });

        it('Sould never have a negative quality', () => {
            const gildedRose = new GildedRose([ new Item('Conjured Mana Cake', 1, 1) ]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).to.equal(0);
        });
        
    })

});
