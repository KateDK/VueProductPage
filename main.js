//new vue instance
const app = new Vue({
  //el = element that is mounted on the element with id app
  el: '#app',

  //data is the data we are passing to the el above
  data: {
    product: 'Socks',
    description:
      'These Fluffy socks will keep your toes snug and warm all winter long!',
    image: './vmSocks-green-onWhite.jpg',
    link: 'https://johnscrazysocks.com/collections/fun-and-funny-socks',
    altText: 'A pair of socks',
    details: ['80% Cotton', '20% Polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 5623,
        variantColor: 'Green',
        variantImage: './vmSocks-green-onWhite.jpg',
      },
      {
        variantId: 2354,
        variantColor: 'Blue',
        variantImage: './VMSocks-Blue.jpeg',
      },
    ],
    sizes: [32, 35, 37, 40, 45],
    inventory: 100,
    onSale: false,
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});
