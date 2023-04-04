import products from './products';

const productName: string = 'shirt';
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const product = products.filter(product => { 
  return product.name === productName;
})[0];

console.log(product);


if (product.preOrder) {
  console.log("We will send you a message when your product ships.");
}

