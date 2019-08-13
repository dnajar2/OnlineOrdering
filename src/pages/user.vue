<template>
    <div class="row justify-center">
      <div class="col-4 q-mt-lg" v-if="!loggedIn">
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
      <div class="col-8" v-else>
       <h4> Welcome {{ userName }}</h4>
        <q-table
          title="Past Orders"
          :data="data"
          :columns="columns"
          row-key="name"
        />
      </div>

    </div>
</template>

<script>
    export default {
        name: "user",
        data(){
            return{
                userName:'',
                password:'',
                loggedIn:false,
                columns:[
                    {name:'name', label:'Item Order', field: row => row.name},
                    {name:'date', label:'Date Order', field: 'date'},
                    {name:'paid', label:'Amount Paid', field: 'paid', format: val => `$${(val / 100).toFixed(2)}`},

                ],
                data:[
                    {name: 'Chicken Sandwich', date:'8/15/2019', paid:2000},
                    {name: 'Chicken Salad', date:'8/05/2019', paid:1800}
                ]
            }
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
