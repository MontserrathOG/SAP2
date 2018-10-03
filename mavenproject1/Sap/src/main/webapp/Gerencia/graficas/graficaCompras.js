var ctx = document.getElementById("gCompras").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["2015", "2016", "2017", "2018"],
      datasets: [{
          label: "Norte",
          type: "line",
          borderColor: "#8e5ea2",
          data: [408,547,675,734],
          fill: false
        }, {
          label: "Centro",
          type: "line",
          borderColor: "#3e95cd",
          data: [133,221,783,2478],
          fill: false
        }, {
          label: "Norte",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          data: [408,547,675,734],
        }, {
          label: "Centro",
          type: "bar",
          backgroundColor: "rgba(0,0,0,0.2)",
          backgroundColorHover: "#3e95cd",
          data: [133,221,783,2478]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Compras a proveedores en el centro y norte'
      },
      legend: { display: false }
    }
});

