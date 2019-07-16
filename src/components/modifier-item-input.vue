<template>
  <div class="row mt-5" style="margin-top: 20px"  >
    <div class="col-3"><q-input label="Name" v-model="item.itemName" /></div>
    <div class="col-3"><q-input label="Ordering" v-model="item.ordering" /></div>
    <div class="col-3"><q-input label="Price" v-model="item.price" /></div>
    <div class="col-3" style="margin-top: 7px; text-align: right">
      <q-btn color="primary" icon="save" class="vertical-middle" @click="saveNewItem"/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "modifier-item-input",
        props:['item'],
        methods:{
            saveNewItem(){
                this.$emit('saveNewItem')
            }
        }

    }
</script>

<style scoped>
.col-3{
  padding: 0 15px;
}
</style>
