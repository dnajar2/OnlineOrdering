<template>
  <q-page class="q-pa-lg">
    <div class="row">
      <div class="col-sm-3 q-mb-lg">
        <q-input filled type="file" @change="loadCSV($event)"/>
      </div>
    </div>
    <q-table
      title="CSV data"
      :data="parse_csv"
      :columns="headers"
      row-key="name"
      v-if="parse_csv"
    />
    <q-btn unelevated label="upload"  color="primary" class="q-mt-lg" @click="uploadData" />
  </q-page>

</template>

<script>

  import csv from 'csvtojson'
  import PercentInput from "../components/percent-input";

  export default {
    name: "home-index",
    components: {PercentInput},
    data() {
      return {
        channel_name: '',
        channel_fields: [],
        channel_entries: [],
        parse_header: [],
        parse_csv: [],
        sortOrders: {},
        sortKey: ''
      };
    },
    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    computed: {
      headers() {
        let header = []
        this.parse_header.forEach(el => {
          header.push({name: el, label: el, align: 'left', field: el})
        })
        return header
      }
    },
    methods: {
      sortBy: function (key) {
        let self = this
        self.sortKey = key
        self.sortOrders[key] = self.sortOrders[key] * -1
      },
      csvJSON(csv) {

        let self = this
        let lines = csv.split("\n")
        let result = []
        let headers = lines[0].split(",")
        self.parse_header = lines[0].split(",")
        lines[0].split(",").forEach(function (key) {
          self.sortOrders[key] = 1
        })

        lines.map(function (line, indexLine) {
          if (indexLine < 1) return // Jump header line

          let obj = {}
          let currentline = line.split(",")

          headers.map(function (header, idx) {
            obj[header] = currentline[idx]
          })

          result.push(obj)
        })

        return result // JavaScript object
      },
      loadCSV(e) {
        console.log(e)
        let self = this
        if (window.FileReader) {
          let reader = new FileReader();
          reader.readAsText(e.target.files[0]);
          // Handle errors load
          reader.onload = function (event) {
            let csv = event.target.result;
            self.parse_csv = self.csvJSON(csv)

          };
          reader.onerror = function (evt) {
            if (evt.target.error.name == "NotReadableError") {
              alert("Canno't read file !");
            }
          };
        } else {
          alert('FileReader are not supported in this browser.');
        }
      },
      uploadData(){
        console.log(this.parse_csv);
        return new Promise(async (resolve, reject) =>{
          try {
            this.category = await this.$ApiRequest(`upload`, 'post', this.category)
            resolve()
          } catch (e){
            console.log(e)
          }
        })
      }
    }
  }
</script>
<style scoped>
  .nav-width {
    width: 250px;
  }

  .nav-no-with {
    width: 0;
  }

  .sidenav {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #ccc;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }

  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .sidenav a:hover {
    color: #f1f1f1;
  }

  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 36px;
  }

  @media screen and (max-height: 450px) {
    .sidenav {
      padding-top: 15px;
    }

    .sidenav a {
      font-size: 18px;
    }
  }

</style>
