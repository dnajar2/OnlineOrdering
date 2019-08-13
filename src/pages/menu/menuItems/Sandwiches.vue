<template>
    <div>
      <h3 class="no-margin q-pb-md">Sandwiches</h3>

      <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
        <food-grid-item  class="col-md-4 col-sm-6 col-xs-12 q-pa-sm"
                         v-for="(item, key) in foodData"
                         :key="key"
                         :food="item"
                         @addToCart="addToCart"
                         />
      </div>
      <q-slide-transition>
      <div class="cart" v-if="cartItems.length > 0">
        <div>Your Cart Items</div>
        <hr>
        <div>
          <div v-for="(cart, key) in cartItems" class="row" :class="[cartItems.length > 2 ? 'border-bottom':'']">
            <div class="col-6"><span @click="removeItem(key)" class="delete-item">&times;</span> {{cart.name}}</div>
            <div class="col-6 text-right">Price {{ cart.price | price}}</div>
          </div>
          <div style="clear: both"></div>
        </div>
        <hr>
        <div class="total text-right">
          Grand Total: {{total}}</div>
      </div>
      </q-slide-transition>
    </div>
</template>

<script>
    import FoodGridItem from "../../../layouts/FoodGridItem";
    export default {
        name: "Sandwiches",
        components: {FoodGridItem},
        data(){
            return{
                foodData:[
                    {
                        id: '1',
                        name: 'Chicken ',
                        category:'Sandwiches',
                        price: '1025',
                        image:'https://www.foodiesfeed.com/wp-content/uploads/2016/04/toasted-sandwich-with-pickles-463x309.jpg',
                        options: [
                            {label: 'Whole', value: 1025},
                            {label: 'Half', value: 825},
                        ],
                    },
                    {
                        id: '2',
                        name: 'Pull Pork',
                        category:'Sandwiches',
                        price: '925',
                        image:'https://www.foodiesfeed.com/wp-content/uploads/2015/05/argentinian-beef-steak-sandwich-463x309.jpg',
                        options: [
                            {label: 'Whole', value: 1125},
                            {label: 'Half', value: 925},
                        ],
                    },
                    {
                        id: '3',
                        name: 'Turkey',
                        category:'Sandwiches',
                        price: '1025',
                        image:'https://media.istockphoto.com/photos/smoked-turkey-and-tomato-sandwich-picture-id962838130?b=1&k=6&m=962838130&s=170667a&w=0&h=AXuUQImSMWewe0zduFACIx_b26MnfasTDWl7chmBuh4=',
                        options: [
                            {label: 'Whole', value: 1025},
                            {label: 'Half', value: 825},
                        ],
                        modifiers:{
                            popular:[
                                {id:1, name:'Fresh Mozzarella'},
                                {id:2, name:'Arugula'},
                                {id:3, name:'Romaine Lettuce'},
                                {id:4, name:'Red Grape Tomatoes'},
                                {id:5, name:'Salt & Pepper'},
                                {id:6, name:'Strawberries'},
                                {id:7, name:'Basil'},
                            ],
                            proteins:[
                                {id:1, name:'Chicken'},
                                {id:2, name:'Quinoa Tomato Sofrito'},
                                {id:3, name:'Smoked Pulled Chicken'},
                            ],
                            cheeses: [
                                {id: 1, name:'Fresh Mozzarella'},
                                {id: 2, name:'Gorgonzola'},
                                {id: 3, name:'Grated Parmesan'},
                            ],
                            veggies: [
                                {id:1, name:'Arugula'},
                                {id:2, name:'Romaine Lettuce'},
                                {id:3, name:'Red Grape Tomatoes'},
                                {id:4, name:'Spinach'},
                            ],
                            toppings:[
                                {id:1, name:'Salt & Pepper'},
                                {id:2, name:'Strawberries'},
                                {id:3, name:'Basil'},
                                {id:4, name:'Apple Chips'},
                                {id:5, name:'Almonds'},
                            ],
                            dressings: [
                                {id:1, name:'Olive Oil'},
                                {id:2, name:'Balsamic Glaze'},
                                {id:3, name:'White Balsamic Apple'},
                                {id:4, name:'Chile Lime Rojo Ranch'},
                                {id:5, name:'Greek Dressing'},
                            ]
                        }
                    },
                ],
                cartItems:[]

            }
        },
        computed: {
            total(){
                let grandTotal = 0
                for(let i = 0; i < this.cartItems.length; i++){
                    console.log(this.cartItems[i].price)
                    grandTotal += parseInt(this.cartItems[i].price)
                }
                return `$${(grandTotal / 100).toFixed(2) }`
            }
        },
        methods:{
            addToCart(cartData){
                this.cartItems.push(cartData)
            },
            removeItem(key){
                this.cartItems.splice(key, 1)
            }
        },
        filters:{
            price(val){
                return `$${(val / 100).toFixed(2)}`
            }
        }
    }
</script>

<style scoped>
  .cart{
    position: fixed;
    bottom: 0;
    background-color: whitesmoke;
    z-index: 99999999;
    right: 10px;
    width: 400px;
    padding: 15px;
  }
  .border-bottom{
    border-bottom: 1px dashed #999;
  }
  .delete-item{
    padding: 5px;
    cursor: pointer;
  }
</style>
