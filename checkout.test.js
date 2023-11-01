const { scanItem, addItem, basket, listItems, calculateTotalPrice, removeItem } = require("./checkout");
const { orange, pineapple, kiwi, apple, banana, catalogue } = require("./data");

describe("scanItem", () => {
    it("Scan item from barcode", () => {
        expect(scanItem(apple.barcode)).toEqual(apple.price);
        expect(scanItem(pineapple.barcode)).toEqual(pineapple.price);
    })
})

describe("addItem", () => {
    it("Adds item to basket", () => {
        expect(basket).toEqual([]);
        expect(addItem(kiwi)).toEqual([kiwi]);
        expect(addItem(kiwi)).toEqual([kiwi, kiwi]);
        listItems();
    })
})

describe("calculateTotalPrice", () => {
    it("Calculates total price of items in basket", () => {
        expect(calculateTotalPrice()).toEqual(50);
    })
})

describe("removeItem", () => {
    it("Removes an item from the basket", () => {
        addItem(apple);
        addItem(orange);
        expect(basket).toEqual([kiwi, kiwi, apple, orange]);
        removeItem(kiwi);
        expect(basket).toEqual([kiwi, apple, orange]);
        removeItem(orange);
        expect(basket).toEqual([kiwi, apple]);
    })
})