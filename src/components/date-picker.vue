<template>
  <div class="q-pa-md" style="max-width: 300px">

    </div>
</template>

<script>
  import moment from 'moment'
  import {Bar} from 'vue-chartjs'
    export default {
      extend: Bar,
        name: "date-picker",
        data () {
            return {


            }
        },
        mounted () {

        },
        methods: {
            limitDatesFn(startDate){

                return startDate <= startDate;
            }
        }
    }
</script>

<style scoped>

</style>
