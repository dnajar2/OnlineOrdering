<template>
    <div>
      <h3 class="no-margin q-pb-lg category-name">{{ $route.params.id }}
        <span class="float-right">
          <i class="fas fa-th" @click="isList = false"></i>&nbsp;<i class="fas fa-list" @click="isList = true"></i>
        </span>
      </h3>

      <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">

        <food-grid-item  class="col-md-4 col-sm-6 col-xs-12 q-pa-sm"
                         v-for="(item, key) in foodData"
                         :key="key"
                         :food="item"
                         :is-list="isList"
                         @addToCart="addToCart"
                         />
      </div>
      <q-slide-transition>
      <div class="cart" v-if="cartItems.length > 0">
        <div>
          <span class="float-left">Your Cart Items</span>
          <span class="float-right btn" @click="checkOut">Check Out</span>
          <div style="clear: both"></div>
        </div>
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
          Total: {{total}}</div>
      </div>
      </q-slide-transition>
    </div>
</template>

<script>
    import FoodGridItem from "../layouts/food-grid-item";
    export default {
        name: "category-view",
        components: {FoodGridItem},
        data(){
            return{
                category:'',
                isList: false,
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
                        price: '1125',
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
            },
            checkOut(){
                this.$router.push('/checkout')
            },
        },
        filters:{
            price(val){
                return `$${(val / 100).toFixed(2)}`
            }
        }
    }
</script>

<style scoped>
  h3 span{
    font-size: 1.5rem;
    cursor: pointer;
  }
  .cart{
    position: fixed;
    bottom: 0;
    background-color: whitesmoke;
    z-index: 99999999;
    right: 10px;
    max-width: 400px;
    min-width: 300px;
    padding: 15px;
    -webkit-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
    -webkit-box-shadow: 0 0 2px 2px rgba(0,0,0,0.5);
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.5);

  }
  .border-bottom{
    border-bottom: 1px dashed #999;
    margin-bottom: 5px;
  }
  .delete-item{
    padding: 5px;
    cursor: pointer;
  }
  .btn {
    padding: 2px 4px;
    background-color: green;
    color: white;
    cursor: pointer;
  }
  .category-name{
    text-transform: capitalize;
  }
</style>
