<template>
  <div>
    <q-table
      title="Items"
      :data="data"
      :columns="columns"
      row-key="name"
      binary-state-sort
      :rows-per-page-options=[10,20]
    >
      <template v-slot:top>
        <q-btn flat dense color="primary" label="Add New Item" icon="add" @click="addItem" />
        <q-space />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="itemName" :props="props">
            {{ props.row.itemName }}
            <q-popup-edit v-model="props.row.itemName" title="Update Item Name" buttons>
              <q-input type="text" v-model="props.row.itemName" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="ordering" :props="props">
            {{ props.row.ordering }}
            <q-popup-edit v-model="props.row.ordering" title="Update ordering" buttons>
              <q-input type="number" v-model="props.row.ordering" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td key="price" :props="props">
            <div class="text-pre-wrap">{{ props.row.price }}</div>
            <q-popup-edit v-model="props.row.price" title="Update Price" buttons>
              <q-input  type="text" v-model="props.row.price" dense autofocus />
            </q-popup-edit>
          </q-td>
          <q-td class="text-right">
            <q-btn color="red" icon="delete" @click="deleteItem(props.row.id)" />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
    export default {
        name: "modifier-item-table",
        props:{
            data:{
                type: Array,
                default: Object.create([])
            },
            columns: {
                type: Array,
                default: Object.create([])
            }
        },
        methods: {
            addItem(){
                this.$emit('addItem')
            },
            deleteItem(id){
                this.$emit('deleteItem', id);
            }
        }
    }
</script>

<style scoped>

</style>
