<template>
  <div>
    <h3>Menu Categories
      <span class="float-right">
          <i class="fas fa-th" @click="isList = false"></i>&nbsp;<i class="fas fa-list" @click="isList = true"></i>
        </span></h3>
    <div class="row q-col-gutter-sm">
      <div v-for="(category, key) in categories" :key="key" class="col-md-4 col-xs-6" >
        <q-card tag="a" :to="category.path">
          <q-card-section class="text-center">{{category.name}}</q-card-section>
          <router-link tag="a" :to="category.path">
            <q-img
              :src="category.img"
              :ratio="16/9"
            />
          </router-link>
        </q-card>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Categories",
        data(){
            return {
                categories:[
                    {
                        name:'Sandwiches',
                        path:'/menu/categories/sandwiches',
                        img:'https://www.foodiesfeed.com/wp-content/uploads/2015/05/argentinian-beef-steak-sandwich-463x309.jpg'
                    },
                    {
                        name:'Burgers',
                        path:'/menu/categories/burgers',
                        img:'https://media.istockphoto.com/photos/closeup-hamburger-with-fast-food-picture-id1007333174?b=1&k=6&m=1007333174&s=170667a&w=0&h=BIXXOWMvw6elilg3iuLxSDZevw1cxLL7P2_7UQJevX8='
                    },
                    {
                        name:'Salads',
                        path:'/menu/categories/salads',
                        img:'https://www.foodiesfeed.com/wp-content/uploads/2016/06/salad-in-a-salad-bar-463x309.jpg'
                    },
                    {
                        name:'Meals',
                        path:'/menu/categories/meals',
                        img:'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-463x694.jpg'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
