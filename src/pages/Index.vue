<template>
  <q-page>

    <div class="q-pa-md text-accent text-center">
      <h2>Some restaurant in the middle of some where</h2>

    </div>
  </q-page>
</template>

<script>
  import moment from 'moment'
    import Vue from 'vue'
    import vueCountryRegionSelect from 'vue-country-region-select'
    Vue.use(vueCountryRegionSelect)
    export default {
        data () {
            let currentYear = moment().format('YYYY')
            let optionsYear = []
            let i = 0
            while (i < 6) {
                let options = { label: '', value: '' }
                options.label = currentYear
                options.value = currentYear.toString().substr(2)
                optionsYear.push(options)
                currentYear++
                i++
            }
            return {
                region: '',
                cardNumber: null,
                name: null,
                modelMonth: null,
                modelYear: null,
                optionsMonth: [
                    {
                        label: 'January - 01',
                        value: '1'
                    },
                    {
                        label: 'February - 02',
                        value: '2'
                    },
                    {
                        label: 'March - 03',
                        value: '3'
                    },
                    {
                        label: 'April - 04',
                        value: '4'
                    },
                    {
                        label: 'May - 05',
                        value: '5'
                    },
                    {
                        label: 'Jun - 06',
                        value: '6'
                    },
                    {
                        label: 'July - 07',
                        value: '7'
                    },
                    {
                        label: 'August - 08',
                        value: '8'
                    },
                    {
                        label: 'September - 09',
                        value: '9'
                    },
                    {
                        label: 'October - 10',
                        value: '10'
                    },
                    {
                        label: 'November - 11',
                        value: '11'
                    },
                    {
                        label: 'December - 12',
                        value: '12'
                    },
                ],
                optionsYear,
                optionsStates:[
                    {
                        label: 'California',
                        value: 'ca'
                    }
                ],
                devices:'',
                specialDeal:false,
                deviceList: [1,2,3,4,5],
                devicePrice:69,
                billing:{
                    Address1:'',
                    Address2:'',
                    City:'',
                    Zip:'',
                },
            }
        },
        computed: {
            deviceTotal(){
                return this.devices * this.devicePrice
            }
        },
        methods: {
            onSubmit () {
                if (this.accept !== true) {
                    this.$q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'fas fa-exclamation-triangle',
                        message: 'You need to accept the license and terms first'
                    })
                }
                else {
                    this.$q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'fas fa-check-circle',
                        message: 'Submitted'
                    })
                }
            },

            onReset () {
                this.name = null
                this.age = null
                this.accept = false
            }
        }
    }
</script>
<style scoped>
  @media (max-width:768px){
    #billing-address .col-xs-12{
      margin-bottom: 10px;
    }
  }

</style>
