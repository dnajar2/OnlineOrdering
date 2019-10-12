<template>
    <div class="page">
      <h4 style="margin: 15px 5px">Online Menu</h4>
      <hr>
      <div class="row q-col-gutter-lg">
        <div class="tree col-sm-2" >
          <q-list>
            <q-item clickable v-for="(menu, idx) in menus" :key="idx" tag="a" :to="menu.path" exact>
              <q-item-section>{{ menu.name}}</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-sm-10 col-xs-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "food-menu",
        data(){
            return{
                menus: [
                    { name:'Our menu', path:'/menu/categories' },
                    { name:'Sandwiches', path:'/menu/categories/sandwiches' },
                    { name:'Burgers', path:'/menu/categories/burgers' },
                    { name:'Salads', path:'/menu/categories/salads' },
                    { name:'Meals', path:'/menu/categories/meals' },
                ]
            }
        }
    }
</script>

<style>
  h3{
    font-size: 2rem;
  }
  h3 span{
    font-size: 1.5rem;
    cursor: pointer;
  }
.page{
  padding: 0 15px;
  margin-bottom: 25px;
}
  @media (max-width: 767px) {
    .tree .q-list > a{
        float: left !important;
        padding: 5px 10px;
        background-color: dodgerblue;
        color: #fff;
        margin: 0 2px 5px 2px;
    }
  }
</style>
