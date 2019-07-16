<template>
  <q-page class="flex">
    <div id="q-app">
      <div class="q-pa-md">
      <modifier-item-table :data="data" :columns="columns" @addItem="addItem" @deleteItem="deleteItem" />
        <modifier-item-input v-for="(item, key) in newItems" :key="key" :item="item" v-if="newItems.length" @saveNewItem="saveNewItem"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import ModifierItemTable from "../components/modifier-item-table";
import ModifierItemInput from "../components/modifier-item-input";
export default {
  name: 'PageIndex',
    components: {ModifierItemInput, ModifierItemTable},
    data () {
        return {
            columns: [
                {
                    name: 'itemName',
                    align: 'left',
                    required: true,
                    label: 'Name',
                    field: row => row.name,
                    format: val => `${val}`,
                    sortable: true
                },
                { name: 'ordering', align: 'center', label: 'Ordering', field: 'ordering', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
                { name: 'price', align: 'right', label: 'Price', field: 'price' },

            ],
            data: [
                {
                    id:'1',
                    itemName: 'American',
                    ordering: 0,
                    price: 0
                },
                {
                    id:'2',
                    itemName: 'Provolone',
                    ordering: 1,
                    price: 9.0
                },
                {
                    id:'3',
                    itemName: 'Jack',
                    ordering: 3,
                    price: 16.0
                },
                {
                    id:'4',
                    itemName: 'Swiss',
                    ordering: 2,
                    price: 3.7
                },
                {
                    id:'5',
                    itemName: 'Pepper',
                    ordering: 1,
                    price: 16.0
                }
            ],
            newItems:[]
        }
    },
    methods:{
        deleteItem(id){
            console.log('itemId: ' , id);
            this.data.splice(this.data.findIndex(v => v.id === id), 1);
        },
        addItem(){
            let obj = {
                id:0,
                itemName: '',
                ordering: 0,
                price: 0
            }
            this.newItems.push(obj)
        },
        saveNewItem(){
            console.log(this.newItems)
            this.newItems.forEach(item => {
                if(item.itemName !== ''){
                    this.data.push(item)
                }
            })
            this.newItems = [];
        }
    }
}
</script>
