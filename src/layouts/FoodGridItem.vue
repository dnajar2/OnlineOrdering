<template>
    <div >
      <q-card>
        <div class="row">
          <div class="col-6 q-pa-md">{{food.name}}</div>
          <div class="col-6 text-right q-pa-md">{{ itemPrice }}</div>
        </div>
        <img :src="food.image" alt="" class="responsive">
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
            class="col-6"/>
        </q-card-section>
      </q-card>
      <!--      modal-->
      <modifiers-modal
        :modifiers="food.modifiers"
        :modifiers-modal="modifiersModal"
        @closeModal="closeModal"
        @addToCart="addToCart"
        :title="food.name"
        :price="itemPrice" />
    </div >
</template>

<script>
    import ModifiersModal from "../components/modifiersModal";
    export default {
        name: "FoodGridItem",
        components: {ModifiersModal},
        props:{
            food:{
                type: Object,
                default: () => {}
            },
        },
        data(){
          return{
              options:'Size',
              order:'',
              modifiersModal: false
          }
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
                    modifiers:[]
                }
                Object.assign(newItem.modifiers, modifiers)
                this.modifiersModal = false
                this.$emit('addToCart', newItem)
            }
        }
    }
</script>

<style scoped>

</style>
