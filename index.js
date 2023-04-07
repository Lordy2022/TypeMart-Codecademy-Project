"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'fanny pack';
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "42 Wallaby Way, Sidney, Australia.";
var product = products_1.default.filter(function (product) {
    return product.name === productName;
})[0];
if (product.preOrder) {
    console.log("We will send you a message when your product ships.");
}
if (product.price > 25) {
    console.log('This item will recieve free shipping');
    shipping = 0;
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    shipping = 0.05;
}
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
