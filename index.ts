import products from './products';

const productName: string = 'shirt';

const product = products.filter(product => { 
  return product.name === productName;
})[0];

console.log(product);


if (product.preOrder) {
  console.log("We will send you a message when your product ships.");
}