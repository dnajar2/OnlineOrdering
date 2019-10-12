<template>
  <div class="q-pa-md">
    <q-btn-toggle
      v-model="model"
      toggle-color="primary"
      :options="options"
      @input="tipAmount"/>
    <q-input outlined v-model="custom" dense class="q-mt-sm" label="custom tip" type="tel" @change="tipAmount" v-if="model === 'custom'"/>
  </div>
</template>

<script>
    export default {
        name: "tip-percentage",
        props: {
            subtotal: {
                type: Number
            }
        },
        data: () => ({
            model: '',
            custom: 0,
            options: [
                {label:'0%', value:'0'},
                {label: '15%', value: '.15'},
                {label: '18%', value: '.18'},
                {label: '22%', value: '.22'},
                {label: 'custom', value: 'custom'}
            ]

        }),
        created() {
            this.model = this.options[2].value
            this.tipAmount(this.model)
        },
        methods: {
            tipAmount(val) {
                let tip = null
                let total = null
                if (this.model !== 'custom') {
                    tip = parseFloat(val).toFixed(2) * this.subtotal
                } else if (this.model === 'custom') {
                    tip = parseFloat(this.custom);
                }
                this.updatedGrandTotal(Math.round(tip))
            },
            updatedGrandTotal(total){
                this.$emit('calculate-grand-total', total)
            }
        }
    }
</script>

<style scoped>

</style>
