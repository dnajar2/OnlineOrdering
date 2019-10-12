<template>
  <q-input :dense="dense" v-model="amountDisplay" :label="label" outlined @focus="keepCursor">
    <template v-slot:append>
      <q-icon name="fas fa-percentage"/>
    </template>
  </q-input>
</template>

<script>
    export default {
        name: "percent-input",
        props: {
            value: {
                type: Number,
                default: 0
            },
            label: {
                type: String,
                default: ''
            },
            dense: Boolean
        },
        data: () => ({
            amount: 0
        }),
        watch: {
            value (newValue) {
                this.amount = newValue
            }
        },
        created () {
            this.amount = this.value
        },
        computed: {
            amountDisplay: {
                get: function () {
                    let amount = this.amount / 100
                    if (isNaN(amount)) {
                        amount = 0
                    }
                    return Number.parseFloat(amount).toFixed(2)
                },
                set: function (value) {
                    let amount = value.replace(/[a-z-A-Z.$]/g, '')
                    if (isNaN(amount)) {
                        amount = 0
                    }
                    amount = parseInt(amount)
                    // forces the getter to run when you type a letter.
                    this.amount = -1
                    this.amount = amount
                    this.$emit('input', amount)
                }
            }
        },
        methods: {
            keepCursor: function (e) {
                // wait for shadow dom
                setTimeout(() => {
                    let cursorStart = this.value.amount || 4
                    e.target.setSelectionRange(cursorStart, cursorStart)
                }, 100)
            }
        }
    }
</script>

<style scoped>

</style>
