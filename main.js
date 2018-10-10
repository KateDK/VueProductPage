//new vue instance
const app = new Vue({
  //el = element that is mounted on the element with id app
  el: '#app',

  //data is the data we are passing to the el above
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    description:
      'These Fluffy socks will keep your toes snug and warm all winter long!',
    // image: './vmSocks-green-onWhite.jpg',
    selectedVariant: 0,
    link: 'https://johnscrazysocks.com/collections/fun-and-funny-socks',
    altText: 'A pair of socks',
    details: ['80% Cotton', '20% Polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 5623,
        variantColor: 'Green',
        variantImage: './vmSocks-green-onWhite.jpg',
        variantQuantity: 10,
      },
      {
        variantId: 2354,
        variantColor: 'Blue',
        variantImage: './VMSocks-Blue.jpeg',
        variantQuantity: 0,
      },
    ],
    sizes: [32, 35, 37, 40, 45],
    // inStock: true,
    onSale: true,
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(index) {
      // this.image = variantImage;
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    onSaleMsg() {
      if (this.onSale) {
        return `${this.brand} ${this.product} are on sale!`;
      }
    },
  },
});
