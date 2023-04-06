import products from './products';

const productName: string = 'fanny pack';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "42 Wallaby Way, Sidney, Australia.";

const product = products.filter(product => { 
  return product.name === productName;
})[0];

if (product.preOrder) {
  console.log("We will send you a message when your product ships.");
}

if (Number(product.price) > 25) {
  console.log('This item will recieve free shipping');
    shipping = 0;
} else {
  shipping = 5;
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  shipping = 0.05;
}

 
