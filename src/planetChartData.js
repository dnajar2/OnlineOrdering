const planetChartData = {
  type: 'bar',
  data: {
    labels: ['2019-07-19','2019-08-19'],
    datasets: [
      { // one line graph
        label: 'Sales Summary',
        data: [0,2],
        backgroundColor: [
          'rgba(54,73,93,.5)'
        ],
        borderColor: [
          'rgba(54,73,93,.8)',
        ],
        borderWidth: 3
      }
    ],
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      }
    }
  }
};

export default planetChartData;
