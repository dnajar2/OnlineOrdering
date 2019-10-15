<template>
<div>
  {{user.name}}
</div>
</template>

<script>
    export default {
        name: "profile",
        data: () => ({
          user:{}
        }),
      created() {
        this.user = this.$store.getters['auth/user']
      }
    }
</script>

<style scoped>

</style>
