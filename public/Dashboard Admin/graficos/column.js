var options = {
    series: [{
    name: 'Downgrade',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Upgrade',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  },],
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
  };

  var graficoColumn1 = new ApexCharts(document.querySelector("#grafico-column-1"), options);
  graficoColumn1.render();