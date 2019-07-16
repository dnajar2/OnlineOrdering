<template>
  <q-page class="flex">
    <div id="q-app">
      <div class="q-pa-md">
        <q-table
          title="Items"
          :data="data"
          :columns="columns"
          row-key="name"
          binary-state-sort
        >
          <template v-slot:top>
            <q-btn flat dense color="primary" label="Add New" icon="add" @click="addRow" />
            <q-space />
          </template>
          <template v-slot:body="props">

            <q-tr :props="props">
              <q-td key="itemName" :props="props">
                {{ props.row.itemName }}
                <q-popup-edit v-model="props.row.itemName" title="Update Item Name" buttons>
                  <q-input type="text" v-model="props.row.itemName" dense autofocus ></q-input>
                </q-popup-edit>
              </q-td>
              <q-td key="ordering" :props="props">
                {{ props.row.ordering }}
                <q-popup-edit v-model="props.row.ordering" title="Update ordering" buttons>
                  <q-input type="number" v-model="props.row.ordering" dense autofocus ></q-input>
                </q-popup-edit>
              </q-td>
              <q-td key="price" :props="props">
                <div class="text-pre-wrap">{{ props.row.price }}</div>
                <q-popup-edit v-model="props.row.price" title="Update Price" buttons>
                  <q-input  type="text" v-model="props.row.price" dense autofocus ></q-input>
                </q-popup-edit>
              </q-td>
              <q-td class="text-right">
                <q-btn color="red" icon="delete" @click="deleteItem(props.row.id)"></q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
        <div class="row mt-5" style="margin-top: 20px" v-if="newItems.length" v-for="(item, key) in newItems" :key="key">
          <div class="col-3"><q-input label="Name" v-model=""></q-input></div>
          <div class="col-3"><q-input label="Ordering"></q-input></div>
          <div class="col-3"><q-input label="Price"></q-input></div>
          <div class="col-3" style="margin-top: 7px; text-align: right"><q-btn color="primary" icon="save" class="vertical-middle"></q-btn></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
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
                { name: 'ordering', align: 'center', label: 'Ordering', field: 'ordering', sortable: true },
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
                    ordering: 237,
                    price: 9.0
                },
                {
                    id:'3',
                    itemName: 'Jack',
                    ordering: 262,
                    price: 16.0
                },
                {
                    id:'4',
                    itemName: 'Swiss',
                    ordering: 305,
                    price: 3.7
                },
                {
                    id:'5',
                    itemName: 'Pepper',
                    ordering: 356,
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
        addRow(){
            let obj = {
                id:0,
                itemName: '',
                ordering: 0,
                price: 0
            }
            this.newItems.push(obj)
        }
    }
}
</script>
