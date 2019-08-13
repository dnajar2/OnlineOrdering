<template>
  <canvas id="planet-chart"></canvas>
</template>

<script>
  import Chart from 'chart.js'
  import planetChartData from '../planetChartData.js'
    export default {
        name: "chartJs",
        data(){
          return {
              planetChartData,
          }
        },
        methods: {
            createChart(chartId, chartData) {
                console.log(chartData)
                const ctx = document.getElementById(chartId);
                const myChart = new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                });
            }
        },
        mounted() {
            this.createChart('planet-chart', this.planetChartData)
        }
    }
</script>

<style scoped>

</style>
