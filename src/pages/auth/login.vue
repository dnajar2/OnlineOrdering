<template>
  <div class="q-pa-md flex justify-center">
    <div class="q-gutter-md" style="width: 400px">
      <q-input filled v-model="userName" label="User Name" />
      <q-input filled v-model="password" label="Password" type="password" />
      <div class="flex">
        <q-btn unelevated color="primary" label="Login" @click="login" /> <q-space/>
        <q-btn unelevated color="secondary" label="Register" />
      </div>

    </div>
  </div>
</template>

<script>
    export default {
      name: "login",
      data: () => ({
        userName: '',
        password: ''
      }),

      methods: {
        async login(){
         try {
           let token = await this.$store.dispatch('auth/login', {email:this.userName, password: this.password})
           await this.$store.dispatch('auth/fetchUser')
           this.$router.push({ name: 'profile' })
         }catch (e) {
           console.log(e)
         }
        }
      }
    }

</script>

<style scoped>

</style>
