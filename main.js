Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template: `<ul>
  <li v-for="detail in details">{{detail}}</li>
</ul>`,
});

Vue.component('product', {
  template: `<div>
  <div class="product">

  <div class="product-image">
    <img :src=image :alt=altText>
  </div>

  <div class="product-info">

    <h1>{{title}}</h1>
    <p>{{onSaleMsg}}</p>
    <p>{{description}}</p>

    <p v-if="inStock">In Stock</p>

    <p v-else :class="{outOfStock: !inStock}">Out Of Stock</p>

<product-details :details="details"></product-details>

    <p>Shipping: {{shipping}}</p>
    <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{
      backgroundColor: variant.variantColor
    }"
      @mouseover="updateProduct(index)">

    </div>

    <div>
      <button @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
      <div class="cart">
        <p>Cart({{cart}})</p>
      </div>
    </div>
    <div>
      <button v-if="cart > 0" @click="removeFromCart">Remove from Cart</button>
    </div>
  </div>

</div>
  </div>`,
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      description:
        'These Fluffy socks will keep your toes snug and warm all winter long!',
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
      onSale: true,
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(index) {
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
    shipping() {
      if (this.premium) {
        return 'Free';
      } else {
        return '$2.99';
      }
    },
  },
});

//new vue instance
const app = new Vue({
  //el = element that is mounted on the element with id app
  el: '#app',
  data: {
    premium: false,
  },
});
