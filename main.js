Vue.component('product', {
  template: `<div>
  <div class="product">

  <div class="product-image">
    <img :src=image :alt=altText>
  </div>

  <div class="product-info">
    <!-- <h1>{{brand}} {{product}}</h1> -->
    <h1>{{title}}</h1>
    <p>{{onSaleMsg}}</p>
    <p>{{description}}</p>

    <p v-if="inStock">In Stock</p>
    <!-- <p v-else-if="inventory < 10 && inventory > 0">Almost Sold Out!</p> -->
    <p v-else :class="{outOfStock: !inStock}">Out Of Stock</p>
    <!-- <p v-show="onSale">On Sale!</p> -->

    <ul>
      <li v-for="detail in details">{{detail}}</li>
    </ul>

    <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box" :style="{
      backgroundColor: variant.variantColor
    }"
      @mouseover="updateProduct(index)">

    </div>

    <!-- <div>
      <p>Sizes:</p>
      <ul>
        <li v-for="size in sizes">{{size}}</li>
      </ul>
    </div> -->

    <!-- <a :href=link target="_blank">See more cool socks</a> -->
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
  data() {
    return {
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

//new vue instance
const app = new Vue({
  //el = element that is mounted on the element with id app
  el: '#app',
});
