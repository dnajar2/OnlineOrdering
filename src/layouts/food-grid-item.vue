<template>
    <div >
      <q-card>
        <div class="row" :class="{'is-list': isList}">
          <div class="col-6 q-pa-md">{{food.name}}</div>
          <div class="col-6 text-right q-pa-md">{{ itemPrice }}</div>
        </div>
        <img :src="food.image" alt="" class="responsive" v-if="!isList">
        <q-card-section class="row q-pa-sm">
          <q-select
            v-model="options"
            :options="food.options"
            class="col-6"
          v-if="options"/>
          <q-btn
            color="primary"
            label="Customize"
            flat
            md
            @click="modifiersModal = true"
            class="col-6"
          v-if="food.modifiers"/>
          <q-btn
            color="primary"
            label="Add To Cart"
            flat
            md
            class="col-6"
            @click="addToCart"
            v-else/>
        </q-card-section>
      </q-card>
      <!--      modal-->
      <modifiers-modal
        :modifiers="food.modifiers"
        :modifiers-modal="modifiersModal"
        :title="food.name"
        :price="itemPrice"
        @closeModal="closeModal"
        @addToCart="addToCart"/>
    </div >
</template>

<script>
    import ModifiersModal from "../components/modifiers-modal";
    export default {
        name: "food-grid-item",
        components: {ModifiersModal},
        props:{
            food:{
                type: Object,
                default: () => {}
            },
            isList:{
                type: Boolean
            }
        },
        data(){
          return{
              options:'Size',
              order:'',
              modifiersModal: false
          }
        },
        created(){
            this.options = this.food.options[0].label
        },
        computed:{
            itemPrice(){
                let price = this.food.price
                if(typeof this.options === 'object'){
                    price = this.options.value
                }
                this.food.price = price
                return `$${(price / 100).toFixed(2)}`;
            }
        },
        methods: {
            closeModal(){
                this.modifiersModal = false
            },
            addToCart(modifiers){
                let newItem = {
                    name: this.food.name,
                    category: this.food.category,
                    price: this.food.price,
                    size: this.options,
                    modifiers:[]
                }
                if(modifiers) {
                    Object.assign(newItem.modifiers, modifiers)
                    this.modifiersModal = false
                }
                console.log('addToCart', newItem)
                this.$emit('addToCart', newItem)
            }
        }
    }
</script>

<style scoped>
  .row.is-list {
    background-color: black;
    color: #fff;
    font-size: 1.2rem;
  }
</style>
