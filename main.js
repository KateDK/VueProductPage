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
    inventory: 100,
    onSale: false,
  },
});
