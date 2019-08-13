<template>
  <q-dialog
    v-model="modifiersModal"
    no-backdrop-dismiss
  >
    <q-card style="width: 700px; max-width: 98vw;">
      <q-card-section>
        <div class="text-h6">
          <span class="float-left">{{this.$attrs.title}}</span>
          <span class="float-right">{{this.$attrs.price}}</span>
          <div style="clear: both"></div>
          <hr>
        </div>
      </q-card-section>

      <q-card-section class="row" style="min-height: 410px">
        <div class="col-sm-4">
          Customize
          <ul class="list">
            <li v-for="(modifier, key) in modifiers" :key="key" @click="displayModifiers(key)" :class="[{active: conditionClass == key}]">
                {{key}}
            </li>
          </ul>
        </div>
        <div class="col-sm-8">
          <q-item tag="label" v-ripple v-for="(modifiers, key) in activeModifiers" :key="key">
            <q-item-section avatar>
              <q-checkbox v-model="chosenModifiers" :val="modifiers.name" color="teal" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{modifiers.name}}</q-item-label>
            </q-item-section>
          </q-item>

        </div>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="Add To Cart" @click="addToCart" :disabled="chosenModifiers.length <= 2" />
        <q-btn flat label="Close" @click="closeModal"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
    export default {
        name: "modifiersModal",
        props:{
            modifiersModal: Boolean,
            modifiers: {
                type: Object,
                default: () => {}
            }
        },
        data(){
            return {
                activeModifiers: '',
                chosenModifiers:[],
                conditionClass:''
            }
        },
        created(){

            if(this.modifiers){
                let modifiers =  Object.keys(this.modifiers)[0]
                this.conditionClass = modifiers
               this.displayModifiers(modifiers)
            }
        },
        methods: {
            closeModal(){
                this.chosenModifiers = []
                this.$emit('closeModal')
            },
            addToCart(){
                this.chosenModifiers = []
                this.$emit('addToCart', this.chosenModifiers)
            },
            displayModifiers(key){
                this.conditionClass = key
                this.activeModifiers = this.modifiers[key]
            }
        }
    }
</script>

<style scoped>
  ul{
    margin: 0;
    padding: 0;
  }
ul.list li{
  list-style: none;
  margin:5px 0;
  padding: 10px;
  background-color: lightgray;
  cursor: pointer;
  text-transform: capitalize;
}
  ul.list li.active{
    background-color: darkgray;
    color: #fff;
  }
  ul.list li:hover{
    background-color: #b0b0b0;
  }
</style>
