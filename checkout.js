/* 1- As a user, I would like to be able to scan an item using a barcode so its details can be found from products list (test data).
2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket.
 */

const { orange, pineapple, kiwi, apple, banana, catalogue } = require("./data");

const basket = [];

function scanItem(barcode) {
    const foundItem = catalogue.find((item) => item.barcode === barcode);
    return foundItem.price;
}

function addItem(item) {
    basket.push(item);
    return basket;
}

function listItems() {
    basket.forEach(item => console.log(item));
}

function calculateTotalPrice() {
    const total = basket.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
    return total;
}

function removeItem(item) {
    const index = basket.indexOf(item);
    basket.splice(index, 1);
}

module.exports = { scanItem, addItem, basket, listItems, calculateTotalPrice, removeItem };