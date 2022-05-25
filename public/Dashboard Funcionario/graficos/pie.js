var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    type: "donut",
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
};

var graficoPie1 = new ApexCharts(
  document.querySelector("#grafico-pie-1"),
  options
);
graficoPie1.render();
