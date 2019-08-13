<template>
  <q-page>

    <div class="q-pa-md">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
      >
        <div class="row q-col-gutter-md">
          <div class="col-sm-6">
            <q-card class="row ">
              <q-card-section class="col-12 bg-primary text-white">
                Credit Card Information
              </q-card-section>
              <div class="col-12 q-pa-xs">
                <q-input
                  autofocus
                  filled
                  v-model="cardNumber"
                  label="Card Number *"
                  mask="#### - #### - #### - ####"
                  fill-mask="#"
                  unmasked-value
                  hint="Credit Card Number"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Credit Card is Required']"
                  class="q-ma-xs"
                >
                  <template v-slot:append>
                    <q-icon name="lock" />
                  </template>
                </q-input>
              </div>
              <div class="col-12 q-pa-xs">
                <div class="col-sm-4">
                  <q-input
                    filled
                    type="text"
                    v-model="name"
                    label="Name On Card *"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Name is Required']"
                    class="q-ma-xs"
                  />
                </div>
                <div class="row q-pa-xs">
                  <div class="col-sm-6">
                    <q-select filled v-model="modelMonth" :options="optionsMonth" label="Expiration Month" class="q-ml-sm q-mr-sm" />
                  </div>
                  <div class="col-sm-6">
                    <q-select filled v-model="modelYear" :options="optionsYear" label="Expiration Year" class="q-ml-sm q-mr-sm" />
                  </div>
                </div>

              </div>
            </q-card>
            <!--            Devices-->
            <q-card class="row q-mt-lg" v-if="!specialDeal">
              <q-card-section class="col-12 bg-primary text-white">
                Number of Licensed Devices
              </q-card-section>
              <div class="col-12 q-pa-lg">
                <q-select filled v-model="devices" :options="deviceList" label="Number of Devices" class="q-ma-xs col-12"/>
                <p v-if="devices">Current Number of Devices Selected {{ devices }}</p>
                <h6 class="q-ma-none">You will be billed <strong>${{deviceTotal}}</strong> every month for 1 devices</h6>
              </div>
            </q-card>
            <q-card class="row q-mt-lg" v-else>
              <q-card-section class="col-12 bg-primary text-white">
                Number of Licensed Devices 2
              </q-card-section>
              <div class="col-12 q-pa-lg">
                <h6 class="q-ma-none">You will be billed <strong>$100</strong> every month for 1 devices</h6>
              </div>
            </q-card>
          </div>
          <div class="col-sm-6">
            <!--          billing address-->
            <q-card id="billing-address" class="row ">
              <q-card-section class="col-12 bg-primary text-white">
               Billing Information
              </q-card-section>
              <div class="col-12 q-pa-xs">
                <q-input
                  autofocus
                  filled
                  v-model="billing.Address1"
                  label="Billing Address 1"
                  hint="Credit Card Holder's Address"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Address is Required']"
                  class="q-ma-xs"
                >
                </q-input>
              </div>
              <div class="col-12 q-pa-xs">
                <div class="col-sm-4">
                  <q-input
                    filled
                    type="text"
                    v-model="billing.Address2"
                    label="Billing Address 2"
                    class="q-mb-lg"
                  />
                </div>
                <div class="row q-pa-xs">
                  <div class="col-md-5 col-xs-12">
                    <q-input
                      filled
                      type="text"
                      v-model="billing.City"
                      label="Billing City"
                      class="q-ma-xs"
                    />
                  </div>
                  <div class="col-md-3 col-xs-12">
                    <q-select
                      filled
                      v-model="region"
                      :options="optionsStates"
                      label="State"
                      class="q-ma-xs"/>
                  </div>
                  <div class="col-md-4 col-xs-12">
                    <q-input
                      filled
                      type="text"
                      v-model="billing.Zip"
                      label="Billing Zip"
                      mask="#####"
                      class="q-ma-xs"
                    />
                  </div>
                </div>

              </div>
            </q-card>

          </div>
        </div>

        <div>
          <q-btn label="Submit" type="submit" color="primary" class="q-mt-lg"/>
<!--          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />-->
        </div>
      </q-form>

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
