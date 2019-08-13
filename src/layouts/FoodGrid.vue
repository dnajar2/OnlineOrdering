<template>
    <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
      <food-grid-item  class="col-md-4 col-sm-6 col-xs-12 q-pa-sm"
                      v-for="(item, key) in data"
                      :key="key"
                      :food="item"
                      :modifiers="modifiers"/>
    </div>
</template>

<script>
    import FoodGridItem from "./FoodGridItem";
    export default {
        name: "FoodGrid",
        components: {FoodGridItem},
        props:{
            data: {
                type:Array,
                default: Object.create([])
            },
            modifiers:{
                type: Object,
                default: () => {}
            }

        },
        data(){
            return{
                cart:[]
            }
        },

    }
</script>

<style scoped>

</style>
