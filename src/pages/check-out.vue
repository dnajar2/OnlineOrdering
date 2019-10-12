<template>
  <div class="row q-pa-lg" style="max-width: 900px; margin: auto">
    <div class="col-12">
      <span class="text-h5"><strong>Order Details</strong></span>
      <hr>
    </div>
    <div class="col-xs-6">
      <p><strong class="xs-hide">Date:</strong> 8/13/2019</p>
      <p><strong class="xs-hide">Time Ready:</strong> About 10 minutes after checkout</p>
    </div>
    <div class="col-xs-6">
      <p class="xs-hide"><strong>Pick Up Location</strong></p>
      <p>123 Street <br>
        Some City, State 90210 <br>
        (916) 966-9999</p>
    </div>
    <div class="order-summary">
      <p class="text-h5">Order Summary</p>
      <q-card>
        <div class="row q-col-gutter-md q-pa-sm">
          <div class="col-3">
            <img src="https://www.foodiesfeed.com/wp-content/uploads/2016/04/toasted-sandwich-with-pickles-463x309.jpg" alt="sandwich" class="responsive">
          </div>
          <div class="col-6">
            <p class="text-h6 q-mb-none">Chicken Sandwich</p>
            <p>Chicken, Salt & Pepper, Arugula, Balsamic Glaze</p>
          </div>
          <div class="col-3 text-right">
            <p class="text-h6">$8.50</p>
          </div>
        </div>
      </q-card>
      <div class="row q-col-gutter-md q-pa-sm reverse-xs">
        <div class="col-sm-6 col-xs-12 ">
          <strong>Special Instructions</strong>
          <q-input filled v-model="instruction"/>
        </div>
        <div class="col-sm-6 col-xs-12">
          <div>
            <span class="float-left text-h6">Subtotal</span>
            <span class="float-right text-h6">$8.50</span>
            <div style="clear: both"></div>
          </div>
          <div>
            <span class="float-left text-h6">Tax</span>
            <span class="float-right text-h6">$0.62</span>
            <div style="clear: both"></div>
          </div>
          <div>
            <span class="float-left text-h6">Tip</span>
            <span class="float-right text-h6">
                <tip-percentage :subtotal="grandTotal" @calculate-grand-total="updatedGrandTotal"/>
              </span>
            <div style="clear: both"></div>
          </div>

          <hr>
          <span class="float-left text-h6">Total</span>
          <span class="float-right text-h6">{{grandTotal | money}}</span>
          <div style="clear: both"></div>
          <p>Feel free to tip the team for great service. Never expected, always appreciated.</p>
        </div>
      </div>
    </div>
    <div style="clear: both"></div>
    <div class="payment-information">
      <p class="text-h5">Payment Information</p>
      <i class="fab fa-cc-visa"></i>
      <i class="fab fa-cc-mastercard"></i>
      <i class="fab fa-cc-discover"></i>
      <i class="fab fa-cc-amex"></i>
      <q-form @submit.prevent.stop="onSubmit">
        <div class="row q-col-gutter-sm">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <q-input
              filled
              v-model="creditCard.number"
              label="Credit Card"
              mask="#### #### #### ####"
              :rules="[val => !!val || 'Credit Card is required']"
              fill-mask="#"
              class="q-mb-sm"
            />
            <div class="row q-col-gutter-xs">
              <div class="col-6">
                <q-select
                  filled
                  v-model="creditCard.expMonth"
                  :options="monthOptions"
                  :rules="[val => !!val || 'Month is required']"
                  label="Expiration Month"/>
              </div>
              <div class="col-6">
                <q-select
                  filled
                  v-model="creditCard.expYear"
                  :options="yearOptions"
                  :rules="[val => !!val || 'Year is required']"
                  label="Expiration Year"/>
              </div>
              <div class="col-6">
                <q-input
                  filled
                  v-model="creditCard.cvv"
                  :rules="[val => !!val || 'CVV is required']"
                  mask="###"
                  label="Security Code*"/>
              </div>
              <div class="col-6">
                <q-input
                  filled
                  v-model="creditCard.zip"
                  :rules="[val => !!val || 'Zip is required']"
                  mask="#####"
                  label="Billing Zip*"/>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <q-input
              filled
              v-model="cardHolder"
              label="Card holder Name"
              :rules="[val => !!val || 'Name is required']"
              class="q-mb-xs"
            />
            <q-input
              filled
              v-model="emailAddress"
              type="email"
              label="Email Address"
              :rules="[val => !!val || 'Email is required']"
              class="q-mb-xs"
            />
            <q-input
              filled
              v-model="contactPhone"
              type="text"
              label="Contact Number"
              mask="(###) ###-####"
              :rules="[val => !!val || 'Phone is required']"
              class="q-mb-xs"
            />
          </div>
          <div class="col-xs-12 text-right">
            <q-btn
              type="submit"
              :loading="submitting"
              label="Place Your Order"
              class="q-mt-md"
              color="teal"

            >
              <template v-slot:loading>
                <q-spinner-facebook/>
              </template>
            </q-btn>
          </div>

        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
    import moment from 'moment'
    import TipPercentage from "../components/tip-percentage";

    export default {
        name: "check-out",
        components: {TipPercentage},
        data() {
            return {
                tip: 0,
                total: 912,
                submitting: false,
                instruction: '',
                creditCard: {
                    number: '',
                    expMonth: '',
                    expYear: '',
                    cvv: '',
                    zip: '',
                },
                cardHolder: '',
                emailAddress: '',
                contactPhone: '',
                monthOptions: '',
                yearOptions: ''
            }
        }
        ,
        created() {
            this.monthOptions = moment.monthsShort();
            let year = moment().format('YYYY');
            let years = [];
            let i = 0;
            while (i < 6) {
                years.push(year),
                    year++
                i++
            }
            this.yearOptions = years
        },
        computed: {
            grandTotal() {
                console.log('total: ', this.total)
                console.log('tip: ', this.tip)
                console.log('Grand Total: ', this.total + this.tip)
                return this.total + this.tip
            }
        },
        methods: {
            updatedGrandTotal(val) {
                console.log('tip received', val)
                this.tip = val;
            },
            onSubmit() {
                this.simulateSubmit()
            },
            simulateSubmit() {
                this.submitting = true
                setTimeout(() => {
                    this.submitting = false
                }, 3000)
            }
        },
        filters: {
            money(val) {
                return `$${(val / 100).toFixed(2)}`
            }
        }
    }
</script>

<style scoped>
  .payment-information i {
    font-size: 1.5rem;
    padding: 0 2px;
  }

  @media (min-width: 768px) {
    .order-summary {
      border-top: 2px dashed;
      border-bottom: 2px dashed;
      padding: 15px 0;
    }
  }

  @media (max-width: 767px) {
    .reverse-xs {
      flex-direction: column-reverse !important;
    }

    .payment-information {
      padding: 10px;
      background-color: antiquewhite;
      width: 100%;
      border-top: 2px dashed;
    }

    button.q-btn {
      width: 100% !important;
      margin-top: 0;
    }
  }
</style>
