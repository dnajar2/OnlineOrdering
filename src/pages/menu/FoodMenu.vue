<template>
    <div class="page">
      <h2 style="margin: 5px">Menu</h2>
      <hr>
      <div class="row">
        <div class="tree col-sm-2" >
          <q-list>
            <q-item clickable v-for="(menu, idx) in menus" :key="idx" tag="a" :to="menu.path">
              <q-item-section>{{ menu.name}}</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-sm-10">
          <router-view></router-view>
        </div>
      </div>


    </div>
</template>

<script>
    export default {
        name: "FoodMenu",
        data(){
            return{
                menus: [
                    { name:'Our menu', path:'/menu/categories' },
                    { name:'Sandwiches', path:'/menu/sandwiches' },
                    { name:'Burgers', path:'/menu/burgers' },
                    { name:'Salads', path:'/menu/salads' },
                    { name:'Meals', path:'/menu/meals' },
                ]
            }
        }
    }
</script>

<style>
.page{
  padding: 0 15px;
}
</style>
