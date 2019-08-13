<template>
    <div class="row justify-center q-col-gutter-md">
      <div class="col-md-4 col-xs-11 q-mt-lg" v-if="!loggedIn">
        <q-input filled
                 v-model="userName"
                 label="User name"
                 lazy-rules
                 :rules="[ val => val && val.length > 0 || 'Please type something']"/>
        <q-input
        filled
        v-model="password"
        type="password"
        label="Password"
        />
        <q-btn primary color="primary" label="Login" class="q-mt-lg" @click="login"/>
      </div>
      <div class="col-md-8 col-xs-12" v-else>
       <p class="text-h6"> Welcome {{ userName }}</p>
        <q-table
          title="Past Orders"
          :data="data"
          :columns="columns"
          row-key="name"
          card-class="q-ma-sm"
        />
      </div>

    </div>
</template>

<script>
    export default {
        name: "user",
        data(){
            return{
                userName:'Some User',
                password:'somepassword',
                loggedIn:false,
                columns:[
                    {name:'name', label:'Item Order', field: row => row.name, align:'left'},
                    {name:'date', label:'Date Order', field: 'date', align:'center'},
                    {name:'paid', label:'Amount Paid', field: 'paid', format: val => `$${(val / 100).toFixed(2)}`},

                ],
                data:[
                    {name: 'Chicken Sandwich', date:'8/15/2019', paid:2000},
                    {name: 'Chicken Salad', date:'8/05/2019', paid:1800}
                ]
            }
        },
        created(){
            this.login()
        },
        methods:{
            login(){
                console.log('hit')
              if(this.userName && this.password){
                  this.loggedIn = true
              }
            }
        }
    }
</script>

<style scoped>

</style>
