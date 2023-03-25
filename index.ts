import products from './products';

const productName: string = 'suck ur mum';

const product = products.filter(product => product.name === productName)[0];

if (product.preOrder) {
  console.log("We will send you a message when your product is on the way.");
}


